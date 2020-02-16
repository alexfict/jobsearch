var app = new Vue({
  el: "#app",
  data: {
    jobs: null,
    searchInput: ""
  },
  mounted () {
    axios
      .get("https://id.jobbnorge.no/api/jobsearch/cached?language=1")
      .then(response => (this.jobs = response.data))
  },
  methods: {
    dropJobItem: function(eventArg) {
      this.jobs = this.jobs.filter(job => job.id != eventArg);
    },
    shuffleJobs: function () {
      for(let i = this.jobs.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);

        let temp = this.jobs[i];
        Vue.set(this.jobs, i, this.jobs[randomIndex]);
        Vue.set(this.jobs, randomIndex, temp);
      }
    }
  },
  computed: {
    filteredJobs: function() {
      return this.searchInput == "" ? this.jobs : this.jobs.filter(job => job.title.includes(this.reversedSearchInput));
    },
    reversedSearchInput: function() {
      return this.searchInput.split('').reverse().join('');
    }
  }
});
