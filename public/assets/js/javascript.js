$(document).ready(function () {
    var grade;
    var routeImg;
    var routeDescription;
    var setDay;
    var setMonth;

    var gymName;
    var gymAddress;
    var gymPhone;
    var gymWebsite;
    var gymId;

    var setterName;
    var setterRole;
    var setterBio;
    var setterId;

    let routeObj = {};
    let gymObj = {};
    let setterObj = {};

    $('#submitMain').click(function () {
        event.preventDefault();
        var select = $('#searchSelect').val();
        var search = $('#searchInput').val().trim();
        var querySearch = select + search;
        if (!search) {
            querySearch = '/api/problems'
        }
        window.location = querySearch;
        $.get(querySearch, function (data) {});
    });

    $(document).on("click", "#routeSubmission", handleProblemSubmit);

    function handleProblemSubmit(event) {
        event.preventDefault();
        
        var date = $('#routeSetDate').val();
        formatDate(date);

        grade = $('#grade').val().trim();
        routeImg = $('#routeImg').val().trim();
        routeDescription = $('#routeDescription').val().trim();
        routeColor = $('#routeColor').val().trim();

        gymName = $('#gymName').val().trim();
        gymAddress = $('#gymAddress').val().trim();
        gymPhone = $('#gymPhone').val().trim();
        gymWebsite = $('#gymWebsite').val().trim();

        setterName = $('#setterName').val().trim();
        setterRole = $('#setterRole').val().trim();
        setterBio = $('#setterBio').val().trim();

        gymObj = {
            name: gymName,
            address: gymAddress,
            phone_number: gymPhone,
            website: gymWebsite,
            GymId: gymId
        };

        setterObj = {
            name: setterName,
            role: setterRole,
            bio: setterBio,
            SetterId: setterId
        };

        GymSetter();

        async function GymSetter() {
            await createGym(gymObj);
            await createSetter(setterObj);
            await createProblem(routeObj);
            $("#submitModal").modal("show");
        };

      

    }

    function formatDate(date) {
        var month = date.charAt(5) + date.charAt(6);
        var day = date.charAt(8) + date.charAt(9);
        setDay = day;
        setMonth = month;
    }

    async function createGym(gymData) {
        $.post('/api/gyms', gymData).then((res) => {
            gymId = res.id;
            return gymId
        });
    }

    async function createSetter(setterData) {
        $.post('/api/setters', setterData).then((res) => {
            setterId = res.id;
            return setterId
        });
    }

    async function createProblem(probData) {
        console.log(gymId);
        console.log(setterId);
        routeObj = {
            grade: grade,
            color: routeColor,
            setDay: setDay,
            setMonth: setMonth,
            photo: routeImg,
            description: routeDescription,
            GymId: gymId,
            SetterId: setterId
        };
        $.post('/api/problems', probData).then((res) => {});
    };
});