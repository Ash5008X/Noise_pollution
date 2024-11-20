function showDialog() {
        var confirmation = confirm("Warning: You are redirecting to subscribing page");
        if (confirmation) {
            window.location.href = "form.html";
        }
    }