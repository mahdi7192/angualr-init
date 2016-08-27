App.service('pdate', function() {
    this.nowComplete = function () {
        return persianDate().format("dddd, DD MMMM YYYY");
    }
});
