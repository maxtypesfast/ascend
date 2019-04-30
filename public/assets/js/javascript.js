$(document).ready(function () {
    var searchInput = $('.form-control');
    var routeName = $('#routeName').val().trim();
    var grade = $('#grade').val().trim();
    var routeType = $('#routeType').val().trim();
    var routeLocation = $('#routeLocation').val().trim();
    var routeSetDate = $('#routeSetDate').val().trim();
    var routeImg = $('#routeImg').val().trim();
    var routeActive = $('#routeActive').val().trim();
    var routeSetter = $('#routeSetter').val().trim();
    var routeDescription = $('#routeDescription').val().trim();



    // event.preventDefault();
    $('#submitMain').click(function () {
        event.preventDefault();
        console.log(searchInput.val().trim());
        $.ajax({
            method: "GET",
            url: "/api/problems"
        }).then(function (res, req) {
            console.log(res);
            // console.log(req.body);
            window.location.replace('/results');
        })

    });


    // $('#routeSubmission').click(function () {

    // });

$(document).on("submit", "#routeSubmission", handleProblemSubmit);

    function handleProblemSubmit(event) {
        event.preventDefault();
        if (!routeName.val().trim()) {
            return;
        }
    }
    createProblem({
        routeName: routeName,
        grade: grade,
        routeColor: routeColor,
        routeType: routeType,
        routeLocation: routeLocation,
        routeSetDate: routeSetDate,
        routeImg: routeImg,
        routeActive: routeActive,
        routeSetter: routeSetter,
        routeDescription: routeDescription
    })

    function createProblem(probData) {
        // event.preventDefault();
        $.post('/api/problems', probData).then((res) => {
            console.log(res.body);
        });
    };

    $('#login').click(function () {
        $("#loginModal").modal();
        //launch login modal
    })

    // $('........login modal.......').click(function() {
    //     event.preventDefault();
    //     console.log()
    // })

    $('#signUp').click(function () {
        $("#signUpModal").modal();
        //launch signup modal
    })

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     if (!nameInput.val().trim()) {
    //         return;
    //     }
    // }

    function getRoutes() {
        $.get("/api/routes", function (data) {
            var rowstoAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowstoAdd.push(createAuthorRow(data[i]));
            }
        })
    }

    function renderRoutesList() {
        routesList
    }

}); //ready wrapper end