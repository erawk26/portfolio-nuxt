import projects from '~/assets/js/projects.js'
var keys = Object.keys(projects.jobs),
  allSkills = keys.reduce((total, val) => {
    const skills = projects.jobs[val].skills
    if (skills) {
      var skillsFiltered = skills.filter((s) => total.indexOf(s) == -1)
      total = total.concat(skillsFiltered)
    }
    return total
  }, [])
export const state = () => allSkills

export const mutations = {}
