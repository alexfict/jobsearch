Vue.component("job-item", {
  props: {
    job: Object
  },
  template: '\
    <div>\
      <p>\
        <span>Vil du bli {{ job.title }}?</span>\
        <button>Ja</button>\
        <button @click="removeFromList(job.id)">Nei</button>\
      </p>\
    </div>\
    ',
  methods: {
    removeFromList: function(jobId) {
      this.$emit("drop-job-item", jobId);
    }
  }
});
