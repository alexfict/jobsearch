Vue.component("job-item", {
  props: {
    job: Object
  },
  template: '\
    <div class="col mb-4">\
      <div class="card">\
        <img v-bind:src="job.logo" class="card-img-top" v-bind:alt="job.title">\
          <div class="card-body">\
            <span>Vil du bli...?</span>\
            <h5 class="card-title">{{job.title}}</h5>\
            <button class="btn btn-primary">Ja</button>\
            <button @click="removeFromList(job.id)" class="btn btn-secondary">Nei</button>\
          </div>\
      </div>\
    </div>\
  ',
  methods: {
    removeFromList: function(jobId) {
      this.$emit("drop-job-item", jobId);
    }
  }
});
