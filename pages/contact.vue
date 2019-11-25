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
          v-text-field(v-model='visitor.name', v-validate="'required|max:40'", :counter='40', :error-messages="errors.collect('name')", label='Name', data-vv-name='name', required='' outlined="")
          v-text-field(v-model='visitor.phone', v-validate="{ required: false, regex: /^(?:1|1 )*(\\([2-9]{1}\\d{2}\\)|[2-9]{1}\\d{2})[- ]*(\\d{3})[- ]*(\\d{4})$/ }", :error-messages="errors.collect('phone')", label='Phone', data-vv-name='phone', required='' outlined="")
          v-text-field(v-model='visitor.email', v-validate="'required|email'", :error-messages="errors.collect('email')", label='E-mail', data-vv-name='email', required='' outlined="")
          v-textarea(v-model='visitor.message', v-validate="'required|min:10'", :error-messages="errors.collect('message')", label='Message',name='input-7-4', data-vv-name='message', required='' outlined="")
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

<style lang="scss" scoped>
@import '~/assets/scss/_forms.scss';
$rvt-dealer-bp-max: $bp-sm;
$formRed: $dk-red;
form label {
  font-family: $fontHead;
  letter-spacing: 1px;
  font-size: 2.7rem;
  padding: 0 5px;
  overflow: visible;
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
