$("#btn-about").on("click", function(e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset
    },
    500
  );
});

function languageEn() {
  //Navbar
  document.getElementById("perfil").innerHTML = "Profile";
  document.getElementById("sobre").innerHTML = "About";
  document.getElementById("formacao").innerHTML = "Formation";
  document.getElementById("experiencia").innerHTML = "Experiences";
  document.getElementById("mais").innerHTML = "More";
  document.getElementById("btnDownload").innerHTML = "Curriculum";

  //Home
  document.getElementById("subtitle").innerHTML = "Welcome, you will know a little about me.";
  //Sobre
  document.getElementById("about-title").innerHTML = "More";
  document.getElementById("about-text").innerHTML =
    "I know how to work in teams, I like working with people, meeting new and different people. I have good communication with coworkers. I am focused, I learn relatively fast and being a little detailed, I am very realistic in setting my goals, I always do my best to reach them and I try even harder to overcome them. I try to help people whenever I can, common sense assists in my decision making, I always offer my best in seeking to evolve as a human being that I am.";
  //Perfil
  document.getElementById("profile-title").innerHTML = "Profile";
  document.getElementById("profile-name").innerHTML = "Name";
  document.getElementById("profile-birth").innerHTML = "Date of Birth";
  document.getElementById("profile-address").innerHTML = "Address";
  document.getElementById("profile-address-text").innerHTML = "Floriano Peixoto Avenue, Santana - Jaboatão, PE";
  document.getElementById("profile-telefone").innerHTML = "Telephone";
  //Skills
  document.getElementById("skills-title").innerHTML = "Skills";
  //Formation and Certificates
  document.getElementById("formation-title").innerHTML = "Formation and Certificates";
  document.getElementById("formation-1").innerHTML = "FATECPE - Faculty of Technology and Science of Pernanbuco - Computer Science";
  document.getElementById("formation-2").innerHTML = "JAVA Academy (102h) - Fuctura Tecnologia - Java Certification";
  document.getElementById("formation-3").innerHTML = "LINUX Academy (108h) - Fuctura Tecnologia - Linux LPI Essentials Certification";
  document.getElementById("formation-4").innerHTML = "Integrated Course Design - Basic English Course";
  //Professional Experiences
  document.getElementById("experiences-title").innerHTML = "Professional Experiences";
  //experiences 2
  document.getElementById("function-1").innerHTML = "Computer Equipment Maintenance Technician";
  document.getElementById("experiences-1-1").innerHTML = "Installation and removal of programs;"
  document.getElementById("experiences-1-2").innerHTML= "User maintenance and troubleshooting;"
  document.getElementById("experiences-1-3").innerHTML= "Development of support routines;"
  document.getElementById("experiences-1-4").innerHTML= "Maintenance Hardware and software;"
  document.getElementById("experiences-1-5").innerHTML= "Remote support via various tools (Teamviewer, Anydesk, RDP);"
  document.getElementById("experiences-1-6").innerHTML= "User / employee support in all departments.";
  //experiences 2
  document.getElementById("function-2").innerHTML = "Junior Support Analyst";
  document.getElementById("experiences-2-1").innerHTML = "Installation and removal of programs (windows / Linux);";
  document.getElementById("experiences-2-2").innerHTML= "User maintenance and troubleshooting;";
  document.getElementById("experiences-2-3").innerHTML= "Development of support routines;";
  document.getElementById("experiences-2-4").innerHTML= "Maintenance Hardware and software (windows / Linux);";
  document.getElementById("experiences-2-5").innerHTML= "Remote support via various tools (Teamviewer, Anydesk, RDP);";
  document.getElementById("experiences-2-6").innerHTML= "User / employee support in all departments;";
  document.getElementById("experiences-2-7").innerHTML= "Internal support for vision system (Honda approved)";
  document.getElementById("experiences-2-8").innerHTML= "Credit card reconciliation.";
  //More
  document.getElementById("more-title").innerHTML = "More";
  document.getElementById("personality-title").innerHTML = "Personality";
  document.getElementById("personality-text").innerHTML = "I have a calm and quiet, proactive personality, I always try to help when I am allowed by offering my best.";
  document.getElementById("interests-title").innerHTML = "Interests";
  document.getElementById("interests-text").innerHTML = "Acting as Front End Developer, dedicating myself in the best way possible always aiming to progress as a person and as a professional.";
  document.getElementById("hobbies-text").innerHTML = "Read books and volunteer for social actions";
  //Contact
  document.getElementById("tituloRodape").innerHTML = "Contact";
  document.getElementById("contact-text1").innerHTML =
    "Floriano Peixoto Avenue, Santana -";
  document.getElementById("form-titulo").innerHTML = "Send Message";
  document.getElementById("form-name").placeholder = "Your name.";
  document.getElementById("form-email").placeholder = "Your e-mail.";
  document.getElementById("form-message").placeholder = "Message";
  document.getElementById("form-submit").value = "Submit";
}

function languagePt() {
  document.location.reload(true);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en,es',
    includedLanguages: 'pt',
    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
  }, 'google_translate_element');

  comboGoogleTradutor = document.getElementById("google_translate_element").querySelector(".goog-te-combo");
}

function changeEvent(el) {
  if (el.fireEvent) {
    el.fireEvent('onchange');
  } else {
    var evObj = document.createEvent("HTMLEvents");

    evObj.initEvent("change", false, true);
    el.dispatchEvent(evObj);
  }
}

function trocarIdioma(sigla) {
  if (comboGoogleTradutor) {
    comboGoogleTradutor.value = sigla;
    changeEvent(comboGoogleTradutor);//Dispara a troca
  }
}
