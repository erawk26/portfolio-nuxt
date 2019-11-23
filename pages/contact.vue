<template lang="pug">
  section.contact
    .wrapper.flex.center
      .form-container
        form#contactForm.color.blk
          h2 Drop me a Note!
          .flex.wrap.contact-info
            .cell.flex.a-center.inline.fa.fa-phone.color.blk
              span.screen-reader Phone Number
              img.txt(src='~assets/img/phone.png', alt="Phone Number")
            .cell.flex.a-center.inline.fa.fa-envelope-o
              span.screen-reader E-Mail Address
              img.txt(src='~assets/img/email.png', alt="Email")
          .form-field.input-group
            input.caps(name='name', type='text', placeholder='Name' v-validate="{ required: true, regex: /^[a-z,.'-]+\\s?[a-z,.'-]+$/i }" v-model="visitor.name" @focus='checkField' @blur='checkField')
            label Name
          .form-field.input-group
            input.caps(type="phone", name="phone", id="visitor-phone", v-model="visitor.phone", v-validate="{ required: false, regex: /^(?:1|1 )*(\\([2-9]{1}\\d{2}\\)|[2-9]{1}\\d{2})[- ]*(\\d{3})[- ]*(\\d{4})$/ }" @focus='checkField' @blur='checkField')
            label Phone Number
          .form-field.input-group
            input(name='email', type='email', placeholder='Email Address' formnovalidate="true" v-validate="'required|email'" v-model="visitor.email" @focus='checkField' @blur='checkField')
            label Email Address
          .form-field.input-group
            textarea(name='message', rows='5', placeholder='Message' v-model="visitor.message" v-validate="{ required: true, min:10 }" @focus='checkField' @blur='checkField')
            label Message
          ul.unstyle.is-danger(v-if="errors.items.length >0 && showErrors")
            li.error-item(v-for="error in errors.items")
              p.is-danger.help {{ error.msg }}
          #status-message
            p {{ status }}
          button#submit(type='submit' @click="validateForm") Send
</template>

<script>
export default {
  transition(to, from) {
    if (!from) return 'slide-down'
    return +to.query.page < +from.query.page ? 'slide-up' : 'slide-down'
  },
  data: () => ({
    visitor: { name: '', email: '', message: '', phone: '' },
    url:
      'https://zepn0cfhee.execute-api.us-east-1.amazonaws.com/prod/email/send',
    showErrors: false,
    status: ''
  }),
  methods: {
    validateForm(e) {
      e.preventDefault()
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.sendEmail(
            this.visitor.email + 'sent you an email from your website!',
            {
              name: this.visitor.name,
              email: this.visitor.email,
              content: this.visitor.message + '\n' + this.visitor.phone
            }
          )
          console.log('Form Submitted!')
        } else {
          this.showErrors = true
        }
      })
    },
    sendEmail(subject, body) {
      console.log('sendmail fired', subject, body)
      return fetch(this.url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then((response) => response.json())
        .then((res) => {
          this.status =
            "Thanks for sending me a message! I'll get in touch with you ASAP. :)"
          console.log('Promise Sucess', res)
          this.resetForm()
        })
        .catch((err) => {
          this.status =
            "I'm sorry There was an error with sending your message. :(\n" + err
          console.log(err)
          this.resetForm()
        })
    },
    resetForm() {
      this.visitor = { name: '', email: '', message: '', phone: '' }
      this.showErrors = false
      const that = this
      setTimeout(() => {
        that.status = ''
      }, 10000)
    },
    checkField(e) {
      // console.log(_invalid, _val);
      // fields.phone && fields.phone.invalid
      if (e.type == 'focus') e.target.nextSibling.classList.add('slide-up')
      if (e.type == 'blur' && e.target.value == '')
        e.target.nextSibling.classList.remove('slide-up')
    }
  }
}
</script>

<style lang="scss">
$rvt-dealer-bp-max: $bp-sm;
$formRed: $dk-red;
form label {
  font-family: $fontHead;
  letter-spacing: 1px;
}
.contact-info {
  position: relative;
  z-index: 12;
  margin: 10px 0;
  .cell {
    margin-right: 0.5em;
  }
  img {
    height: 30px;
    width: auto;
  }
}
.is-danger {
  border: 1px solid $formRed;
  border-radius: 4px;
  &.help {
    border: none;
    color: $formRed;
  }
}

.error-item {
  margin: 0 10px;
  p {
    margin: 5px 0;
  }
  > p:before {
    content: '*';
    position: relative;
    padding-right: 0.25em;
  }
}

/* input,
textarea,
select {
  &.invalid,
  &[aria-invalid="true"] {
    border-color: $formRed;
  }
} */

input[type='phone'] {
  display: block;
  margin-right: auto;
}

input[type='radio'] {
  + label {
  }
  @media (max-width: $bp-md) {
    display: none;
    + label {
      font-size: 0.95em;
      margin: 0 15px 15px 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      &:before {
        margin-right: 0.35em;
        border-radius: 2px;
        border: 1px solid $dk-gray;
        background: $gray;
        width: 18px;
        height: 18px;
        position: relative;
        content: '';
      }
    }
    &:checked + label {
      font-weight: bold;
      &:before {
        background: #fff;
        border: 6px solid $blue;
      }
    }
  }
  @media (min-width: $bp-sm) {
    display: none;
    + label {
      display: inline-block;
      border: 0.5px solid #333;
      margin: 5px 10px 5px 0;
      padding: 3px 20px;
      border-radius: 5px;
    }
    &:checked + label {
      color: white;
      background: $aqua;
    }
  }
}

.helper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  text-align: right;
  height: 20px;
  min-width: 20px;
  overflow: visible;
  top: 10px;
  right: 1px;
  small {
    font-style: italic;
    color: #999;
  }
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
