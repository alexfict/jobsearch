var app = new Vue({
  el: "#app",
  data: {
    jobs: null
  },
  mounted () {
    axios
      .get("https://id.jobbnorge.no/api/jobsearch/cached?language=1")
      .then(response => (this.jobs = response.data))
  },
  methods: {
    dropJobItem: function(eventArg) {
      this.jobs = this.jobs.filter(job => job.id != eventArg);
    }
  }
});
