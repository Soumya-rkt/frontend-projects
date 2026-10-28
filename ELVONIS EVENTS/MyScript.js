window.alert("Welcome to The Elvonis Gala VIP Invitation Portal!");

function invitation() {
    let result = confirm(`You are invited to The Elvonis Gala!
        
        Date:December 25,2026
        Time:7:00 PM
        
        Cilck Ok to accept the invitation.
        Click Cancel to decline.`);

    if (result) {

        document.writeln(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result</title>
    <style>
        * {
            padding: 0px;
            margin: 0px;
            box-sizing: border-box;
        }

        body {
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: white;
        }

        .card {
            background-color: rgb(19, 17, 17);
            width: 80%;
            padding: 30px;
            text-align: center;
            line-height: 60px;
            border: 2px solid gold;
            box-shadow: 0px 0px 10px gold;
            border-radius: 10px;
        }

        h3 {
            color: rgb(138, 10, 10);
        }

        h1 {
            color: gold;
        }

        h2 {
            color: goldenrod;
            margin-bottom: 20px;
        }

        p {
            color: rgb(242, 237, 208);
        }

        a {
            padding: 15px 40px;
            background-color: red;
            border: 1px solid gold;
            border-radius: 10px;
            color: white;
            font-weight: bold;
             text-decoration: none;
            &:hover {
                cursor: pointer;
            }
        }
    </style>
</head>

<body>

    <section class="card">
        <h3>ELVONIS EVENTS</h3>
        <h1>INVITATION ACCEPTED</h1>
        <h2>YOU ARE ON THE VIP GUEST LIST!</h2>
        <hr>
        <p>Event: The Elvonis Gala</p>
        <p>Date: December 12, 2026</p>
        <p>Time: 7:00 PM Onwards</p>
        <p>Venue: The Grand Palace</p>
        <p>Thank you for accepting our invitation. We look forward to welcoming you.</p>

        <a href="index.html">BACK TO INVITATION</a>
    </section>
</body>

</html>`);
    }
    else {
        window.alert(`You have declined the Elvonis Gala invitation.`);
        fun();
    }

}

function fun() {
    document.writeln(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invitation</title>
    <style>
        * {
            padding: 0px;
            margin: 0px;
            box-sizing: border-box;
        }

        body {
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: white;
        }

        .card {
            background-color: rgb(19, 17, 17);
            width: 80%;
            padding: 30px;
            text-align: center;
            ;
            border: 2px solid red;

            border-radius: 10px;
        }

        h3 {
            color: white;
            padding: 15px;

        }

        h1 {
            color: gold;
            padding: 15px;
        }

        h2 {
            color: rgb(138, 10, 10);
            margin-bottom: 10px;
            padding: 15px;
        }

        p {
            color: rgb(242, 237, 208);
            padding: 10px;
            margin-bottom:30px;

        }

        a {
            
            padding: 15px 40px;
            background-color: rgb(148, 11, 11);
            border: 1px solid gold;
            border-radius: 10px;
            color: white;
            font-weight: bold;
             text-decoration: none;
            &:hover {
                cursor: pointer;
            }
        }
    </style>
</head>

<body>

    <section class="card">
        <h3>ELVONIS EVENTS</h3>
        <h1>INVITATION RESPONSE</h1>
        <h2>INVITATION DECLINED</h2>

        <p>You have declined the invitation to The Elvonis Gala.</p>
        <p>Thank you for responding. We hope to welcome you at another event.</p>

        <a href="index.html">BACK TO INVITATION</a>
    </section>
</body>

</html>`);
}



