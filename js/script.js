document.querySelector(".book-btn").addEventListener("click", () => {
    document.querySelector("#appointment-form").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".cta-orange").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("#appointment-form").scrollIntoView({ behavior: "smooth" });
    });
});


document.getElementById("submit-btn").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const captchaInput = document.querySelector(".captcha-input").value.trim();
    const captchaValue = document.querySelector(".captcha-value").textContent.trim();
    const termsChecked = document.querySelector(".checkbox-tick input").checked;

    // Validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (captchaInput !== captchaValue) {
        alert("Incorrect captcha.");
        return;
    }

    if (!termsChecked) {
        alert("Please agree to the terms.");
        return;
    }

    // All correct
    alert("Appointment booked successfully!");
});

