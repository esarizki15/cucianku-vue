export default {
    data: () => {
      return {
        hasLocationPermission: false,
      };
    },
    methods: {
        getLocationPermission(){
            navigator.permissions.query({ name: 'geolocation' })
            .then((res)=>{
                console.log(res.state);
                if(res.state == "granted") return this.getLocation();
            })
            .catch((e)=>{
                console.log(e)
            });
        },
        getLocation(){
            navigator.permission
            console.log();
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position)
                    this.hasLocationPermission = true;
                    return true;
                },
                error => {
                    console.log(error);
                    // this.$swal.fire({
                    //     title: 'Error!',
                    //     text: error.message,
                    //     icon: 'error',
                    //     confirmButtonText: 'Retry',
                    //     reverseButtons: true
                    // }).then((res)=>{
                    //     console.log(res);
                    //     this.getLocationPermission()
                    // })
                    alert('Harap berikan perizinan lokasi untuk mendapatkan posisi yang lebih akurat')
                    return false;
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            )
        }
    },
  };