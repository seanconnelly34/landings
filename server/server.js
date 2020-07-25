require("dotenv").config();
const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();
// app.set("trust proxy", true);
const cors = require("cors");
//encrypt pdf

const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());

app.use(express.static(buildPath));
app.use(cors());

//pdf
const PDFDocument = require("pdfkit");

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Origin", "http://landingsurgeryforms.ca");

//   next();
// });
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

const transporter = require("./config");

const Timestamp = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var dateObj = new Date();
  var month = monthNames[dateObj.getMonth()];
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();
  var hours = dateObj.getHours();
  var minutes = dateObj.getMinutes();

  const newdate = month + "_" + day + "_" + year + "_" + hours + "_" + minutes;

  return newdate;
};

app.post("/registration", (req, res) => {
  const secondsId = Timestamp();
  const doc = new PDFDocument({ margin: 20, compress: false });
  let fileName = req.body.name;
  doc.pipe(
    fs.createWriteStream(
      __dirname + `/Registration_${fileName}_${secondsId}.pdf`
    )
  );
  // Set some meta data
  doc.info["Title"] = "Landings Surgical Center Registration Form";
  doc.info["Author"] = "Landings Surgical Center";
  doc.fontSize(17);
  doc.text("The Landings Surgical Center", {
    underline: true,
    align: "center",
  });
  doc.fontSize(12);
  doc.moveDown();
  doc.text("Pre-Screening Data", { align: "center" });
  doc.fontSize(11);
  //----------------------------------------- LEFT SIDE START
  //DATE
  doc.font("Times-Bold");
  doc.text("Date:", 50, 90, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.date, 145, 90);
  //END DATE
  // DOB
  doc.font("Times-Bold");
  doc.text("Date of birth:", 50, 110, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.dob, 145, 110);
  //END DOB
  // HEALTHCARD
  doc.font("Times-Bold");
  doc.text("Health Card #:", 50, 130, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.healthcard, 145, 130);
  //END HEALTHCARD
  // EXPIRY DATE
  doc.font("Times-Bold");
  doc.text("Expiry Date:", 50, 150, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.expirydate, 145, 150);
  //END expiry date
  // EXPIRY CITY
  doc.font("Times-Bold");
  doc.text("City:", 50, 170, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.city, 145, 170);
  //END city
  // EXPIRY postal
  doc.font("Times-Bold");
  doc.text("Postal Code:", 50, 190, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.postal, 145, 190);
  //END postal
  // work phone
  doc.font("Times-Bold");
  doc.text("Work Phone:", 50, 210, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.workphone, 145, 210);
  //END workphone
  // work email
  doc.font("Times-Bold");
  doc.text("Family Physician:", 50, 230, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.famphysician, 145, 230);
  //END email
  // fam doc
  doc.font("Times-Bold");
  doc.text("Email:", 50, 250, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.email, 145, 250);
  //END
  // contacted
  doc.font("Times-Bold");
  doc.text("Prefered contact method:", 50, 270, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.contacted, 185, 270);
  //END
  // contacted
  doc.font("Times-Bold");
  doc.text("How did you hear of us:", 50, 290, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.hearofus, 185, 290);
  //END
  //----------------------------------------- RIGHT SIDE START
  //NAME
  doc.font("Times-Bold");
  doc.text("Name:", 300, 90, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.name, 390, 90);
  // END
  // AGE
  doc.font("Times-Bold");
  doc.text("Age:", 300, 110, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.dob, 390, 110);
  //END
  // effective date
  doc.font("Times-Bold");
  doc.text("Effective Date:", 300, 130, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.effectivedate, 390, 130);
  //END
  // street address
  doc.font("Times-Bold");
  doc.text("Street Address:", 300, 150, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.streetaddress, 390, 150);
  //END
  // province
  doc.font("Times-Bold");
  doc.text("Province:", 300, 170, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.province, 390, 170);
  //END
  // homephone
  doc.font("Times-Bold");
  doc.text("Home Phone:", 300, 190, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.homephone, 390, 190);
  //END
  // cell
  doc.font("Times-Bold");
  doc.text("Cell Phone:", 300, 210, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.cellphone, 390, 210);
  //END
  // occupation
  doc.font("Times-Bold");
  doc.text("Occupation:", 300, 230, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.occupation, 390, 230);
  //END

  doc.rect(50, 330, 510, 0).stroke();

  // doc.image("line.png", 50, 650, { width: 510 });

  doc.font("Times-Bold");
  doc.text("Medical History", 50, 350, {
    underline: true,
  });

  doc.font("Times-Roman");
  doc.text("Heart Attack:", 50, 390);
  doc.text(`${req.body.heartattack ? "Yes" : "No"}`, 175, 390);
  doc.text(req.body.heartattackDate, 185, 390);

  doc.text("Heart Disease:", 50, 410);
  doc.text(`${req.body.heartdisease ? "Yes" : "No"}`, 175, 410);
  doc.text(req.body.heartdiseaseDate, 185, 410);

  doc.text("Chest Pain:", 50, 430);
  doc.text(`${req.body.chestpain ? "Yes" : "No"}`, 175, 430);
  doc.text(req.body.chestpainDate, 185, 430);

  doc.text("Stroke:", 50, 450);
  doc.text(`${req.body.stroke ? "Yes" : "No"}`, 175, 450);
  doc.text(req.body.strokeDate, 185, 450);

  doc.text("Blood Clots:", 50, 470);
  doc.text(`${req.body.bloodclots ? "Yes" : "No"}`, 175, 470);
  doc.text(req.body.bloodclotsDate, 185, 470);

  doc.text("Prolonged Bleeding:", 50, 490);
  doc.text(`${req.body.bleeding ? "Yes" : "No"}`, 175, 490);
  doc.text(req.body.bleedingDate, 185, 490);

  doc.text("High Blood Pressure:", 50, 510);
  doc.text(`${req.body.bloodpressure ? "Yes" : "No"}`, 175, 510);
  doc.text(req.body.bloodpressureDate, 185, 510);

  doc.text("Kidney Disease:", 50, 530);
  doc.text(`${req.body.kidneydisease ? "Yes" : "No"}`, 175, 530);
  doc.text(req.body.kidneydiseaseDate, 185, 530);

  doc.text("Trouble Opening Mouth:", 50, 550);
  doc.text(`${req.body.openingmouth ? "Yes" : "No"}`, 175, 550);
  doc.text(req.body.openingmouthDate, 195, 550);

  doc.text("Sleep Apnea:", 50, 570);
  doc.text(`${req.body.sleepApnea ? "Yes" : "No"}`, 175, 570);
  doc.text(`Other: ${req.body.sleepApneaOther}`, 195, 570);

  doc.text("Smoker:", 50, 590);
  doc.text(`${req.body.doSmoke ? "Yes" : "No"}`, 175, 590);
  doc.text(`# per day: ${req.body.smokeNumn}`, 205, 590);

  doc.text("Quit smoking:", 50, 610);
  doc.text(`${req.body.didSmoke ? "Yes" : "No"}`, 175, 610);
  doc.text(req.body.smokeQuit, 205, 610);

  doc.text("Height:", 50, 630);
  doc.text(req.body.height, 175, 630);

  //-----------------------------right side
  doc.text("Diabetes:", 300, 390);
  doc.text(`${req.body.diabetes ? "Yes" : "No"}`, 405, 390);
  doc.text(req.body.diabetesDate, 435, 390);

  doc.text("Arthritis:", 300, 410);
  doc.text(`${req.body.arthritis ? "Yes" : "No"}`, 405, 410);
  doc.text(req.body.arthritisDate, 435, 410);

  doc.text("Asthma/Bronchitis:", 300, 430);
  doc.text(`${req.body.asthma ? "Yes" : "No"}`, 405, 430);
  doc.text(req.body.asthmaDate, 435, 430);

  doc.text("Seizures:", 300, 450);
  doc.text(`${req.body.seizures ? "Yes" : "No"}`, 405, 450);
  doc.text(req.body.seizuresDate, 435, 450);

  doc.text("Thyroid Disease:", 300, 470);
  doc.text(`${req.body.thyroid ? "Yes" : "No"}`, 405, 470);
  doc.text(req.body.thyroidDate, 435, 470);

  doc.text("Liver Disease:", 300, 490);
  doc.text(`${req.body.liversisease ? "Yes" : "No"}`, 405, 490);
  doc.text(req.body.liversiseaseDate, 435, 490);

  doc.text("HIV/Hepatitis:", 300, 510);
  doc.text(`${req.body.hiv ? "Yes" : "No"}`, 405, 510);
  doc.text(req.body.hivDate, 435, 510);

  doc.text("Depresssion:", 300, 530);
  doc.text(`${req.body.depression ? "Yes" : "No"}`, 405, 530);
  doc.text(req.body.depressionDate, 435, 530);

  doc.text("Weight:", 300, 630);
  doc.text(req.body.weight, 405, 630);

  doc.text("Possibility of pregnancy:", 50, 660);
  doc.text(req.body.pregnancy, 165, 660);
  doc.addPage();
  doc.text("Previous Surgergies:", 50, 70);
  doc.text(`1. ${req.body.prevSurg1}`, 50, 90);
  doc.text(`2. ${req.body.prevSurg2}`, 300, 90);
  doc.text(`3. ${req.body.prevSurg3}`, 50, 110);
  doc.text(`4. ${req.body.prevSurg4}`, 300, 110);

  doc.font("Times-Bold");
  doc.text("Allergies", 50, 140, {
    underline: true,
  });

  doc.font("Times-Roman");
  doc.text("Medications:", 50, 170);
  doc.text(req.body.allergicMed, 185, 170);
  doc.text(req.body.whichMed, 205, 170);

  doc.text("Foods:", 50, 190);
  doc.text(req.body.allergicMed, 185, 190);
  doc.text(req.body.whichFood, 205, 190);

  doc.text("Latex:", 50, 210);
  doc.text(req.body.allergicLatex, 185, 210);

  doc.text("Iodine:", 50, 230);
  doc.text(req.body.allergicIodine, 185, 230);

  doc.text("Malignant Hyperthermia:", 50, 250);
  doc.text(req.body.hyperthermia, 185, 250);

  doc.text("Problems with Anesthetic:", 50, 270);
  doc.text(req.body.anesthetic, 185, 270);
  doc.text(req.body.anestheticDescribe, 50, 290);

  doc.font("Times-Bold");
  doc.text("Medications", 50, 320, {
    underline: true,
  });

  doc.font("Times-Roman");
  doc.text(`1. ${req.body.medication1}`, 50, 350);
  doc.text(`2. ${req.body.medication2}`, 50, 370);
  doc.text(`3. ${req.body.medication3}`, 50, 390);
  doc.text(`4. ${req.body.medication4}`, 50, 410);
  doc.text(`5. ${req.body.medication5}`, 50, 430);
  doc.text(`6. ${req.body.medication6}`, 50, 450);

  doc.rect(50, 470, 510, 0).stroke();
  doc.text(
    `Contacted for Botox/Dermal filler promotions:   ${req.body.promotions}`,
    50,
    490
  );
  doc.text(
    `Contacted for Clinical Skin Care Therapist:   ${req.body.skinCare}`,
    50,
    510
  );

  doc.font("Times-Bold");
  doc.text("Comments", 50, 540, {
    underline: true,
  });

  doc.font("Times-Roman");
  doc.text(`${req.body.comments}`, 50, 570, { columns: 1, width: 510 });
  {
  }
  doc.image(req.body.trimmedSignature, 50, 650, { width: 150 });
  doc.end();

  try {
    const mailOptions = {
      from: "sean@suhbae.com",
      to: "sean@suhbae.com",
      subject: `Registration - ${req.body.name}`,
      html: req.body.date,
      html: req.body.name,
      attachments: [
        {
          filename: `Registration_${fileName}_${secondsId}.pdf`,
          path: __dirname + `/Registration_${fileName}_${secondsId}.pdf`,
          contentType: "application/pdf",
        },
      ],
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: "somthing went wrong, try again",
        });
      } else {
        res.send({
          success: true,
          message: "thanks for contacting us.",
        });
      }
    });
  } catch (error) {
    res.sendStatus(500).send({
      success: false,
      message: "Somting went wrong, try again later",
    });
  }
});

//------------------------------------------------------covid

app.post("/covid", (req, res) => {
  const secondsId = Timestamp();
  const doc = new PDFDocument({ margin: 20, compress: false });
  let fileName = req.body.name;

  doc.pipe(
    fs.createWriteStream(__dirname + `/Covid_${fileName}_${secondsId}.pdf`)
  );
  // Set some meta data
  doc.info["Title"] = "Covid Assessment Form";
  doc.info["Author"] = "Landings Surgical Center";
  doc.fontSize(17);
  doc.text("Covid Assessment Form", {
    underline: true,
    align: "center",
  });

  doc.fontSize(11);
  //----------------------------------------- LEFT SIDE START
  //DATE
  doc.font("Times-Bold");
  doc.text("Date:", 50, 90, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.date, 145, 90);
  //END DATE
  // NAME
  doc.font("Times-Bold");
  doc.text("Name:", 50, 110, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.name, 145, 110);
  //END
  // DOB
  doc.font("Times-Bold");
  doc.text("Date of birth:", 50, 130, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.dob, 145, 130);
  //END DOB

  doc.rect(50, 160, 510, 0).stroke();

  doc.font("Times-Bold");
  doc.text("Symptoms", 50, 190, {
    underline: true,
  });

  doc.font("Times-Roman");
  doc.text("New or worsening cough:", 50, 210);
  doc.text(`${req.body.cough ? "Yes" : "No"}`, 185, 210);

  doc.text("Fever > 38 C, chills, sweats):", 50, 230);
  doc.text(`${req.body.fever ? "Yes" : "No"}`, 185, 230);

  doc.text("Sore or hoarse throat:", 50, 250);
  doc.text(`${req.body.throat ? "Yes" : "No"}`, 185, 250);

  doc.text("Headache:", 50, 270);
  doc.text(`${req.body.headache ? "Yes" : "No"}`, 185, 270);

  doc.text("Nasal Congestion:", 50, 290);
  doc.text(`${req.body.nose ? "Yes" : "No"}`, 185, 290);

  doc.text("Sneezing:", 50, 310);
  doc.text(`${req.body.sneeze ? "Yes" : "No"}`, 185, 310);

  doc.text("Loss of smell or taste:", 50, 330);
  doc.text(`${req.body.smellTaste ? "Yes" : "No"}`, 185, 330);

  doc.text("Shortness of breath:", 50, 350);
  doc.text(`${req.body.breath ? "Yes" : "No"}`, 185, 350);

  doc.text("Muscle aches:", 50, 370);
  doc.text(`${req.body.aches ? "Yes" : "No"}`, 185, 370);

  doc.text("Unusual fatigue:", 50, 390);
  doc.text(`${req.body.fatique ? "Yes" : "No"}`, 185, 390);

  doc.text("Lesions on feet, toes,fingers:", 50, 410);
  doc.text(`${req.body.lesions ? "Yes" : "No"}`, 185, 410);

  doc.text("Diarrhea:", 50, 430);
  doc.text(`${req.body.lesions ? "Yes" : "No"}`, 185, 430);

  doc.rect(50, 460, 510, 0).stroke();

  doc.text(
    "Have you travelled outside of Maritime Canada in the last 14 days (outside of NB, NS, PEI):",
    50,
    490
  );
  doc.text(req.body.day14Travel, 460, 490);

  doc.text("Have you had close contact with Covid-19:", 50, 510);
  doc.text(req.body.closeContact, 460, 510);

  doc.text(
    "Do you live within a known cluster as identified on the COVID-19 Hub:",
    50,
    530
  );
  doc.text(req.body.clusterHub, 460, 530);

  doc.text("Have you been tested for COVID-19:", 50, 550);
  doc.text(req.body.tested, 460, 550);

  doc.text("Date of test:", 50, 570);
  doc.text(
    `${req.body.dateOfSwab === "" ? "NA" : req.body.dateOfSwab}`,
    460,
    570
  );

  doc.image(req.body.trimmedSignature, 50, 600, { width: 150 });

  doc.end();

  // res.json({
  //   success: true,
  //   message: "thanks for contacting us.",
  // });
  try {
    const mailOptions = {
      from: "sean@suhbae.com",
      to: "sean@suhbae.com",
      subject: `Covid-19 Assessment - ${req.body.name}`,
      html: req.body.date,
      html: req.body.name,
      attachments: [
        {
          filename: `Covid_${fileName}_${secondsId}.pdf`,
          path: __dirname + `/Covid_${fileName}_${secondsId}.pdf`,
          contentType: "application/pdf",
        },
      ],
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: "somthing went wrong, try again",
        });
      } else {
        res.send({
          success: true,
          message: "thanks for contacting us.",
        });
      }
    });
  } catch (error) {
    res.sendStatus(500).send({
      success: false,
      message: "Somting went wrong, try again later",
    });
  }
});

//------------------------------------------------------covid

app.post("/aesthetics", (req, res) => {
  const secondsId = Timestamp();
  const doc = new PDFDocument({ margin: 20, compress: false });
  let fileName = req.body.name;

  doc.pipe(
    fs.createWriteStream(__dirname + `/Aesthetics_${fileName}_${secondsId}.pdf`)
  );
  // Set some meta data
  doc.info["Title"] = "Cosmetics Aesthetics History";
  doc.info["Author"] = "Landings Surgical Center";
  doc.fontSize(17);
  doc.text("Medical Aesthetics Health History & Consultation Form", {
    underline: true,
    align: "center",
  });

  doc.fontSize(11);
  //----------------------------------------- LEFT SIDE START
  //DATE
  doc.text("PERSONAL INFO:", 50, 70, {
    underline: true,
  });

  doc.text("Date:", 50, 90);
  doc.font("Times-Roman");
  doc.text(req.body.date, 145, 90);
  //END DATE

  // NAME

  doc.text("Name:", 50, 110);
  doc.font("Times-Roman");
  doc.text(req.body.name, 145, 110);
  //END
  // DOB

  doc.text("Date of birth:", 50, 130);
  doc.font("Times-Roman");
  doc.text(req.body.dob, 145, 130);
  //END DOB

  doc.text("Address:", 50, 150);
  doc.font("Times-Roman");
  doc.text(req.body.streetaddress, 145, 150);

  doc.text("City:", 300, 90);
  doc.text(req.body.city, 395, 90);

  doc.text("Province:", 300, 110);
  doc.font("Times-Roman");
  doc.text(req.body.province, 395, 110);

  doc.text("Postal:", 300, 130);
  doc.font("Times-Roman");
  doc.text(req.body.postal, 395, 130);

  doc.text("Phone:", 300, 150);
  doc.font("Times-Roman");
  doc.text(req.body.cellphone, 395, 150);
  //---------------------------------------personal info END

  doc.rect(50, 175, 510, 0).stroke();
  //Medical history ------------------------------------

  doc.text("Allergies:", 50, 190, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.allergies, 145, 190);

  doc.text("Current meds:", 50, 210, {
    underline: true,
  });

  doc.text(req.body.currentMeds, 145, 210);

  doc.text("Previous Surgeries:", 50, 230, {
    underline: true,
  });

  doc.text(`1. ${req.body.prevSurg1}`, 50, 250);
  doc.text(`2. ${req.body.prevSurg2}`, 50, 270);
  doc.text(`3. ${req.body.prevSurg3}`, 50, 290);
  doc.text(`4. ${req.body.prevSurg4}`, 50, 310);

  doc.text("Skin cancer:", 50, 330, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.skinCancer, 145, 330);
  doc.text(req.body.cancerWhen, 340, 330);

  doc.text("Cancer type:", 50, 350, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(`${req.body.cancerType1 ? "Basal Cell" : ""}`, 145, 350);
  doc.text(`${req.body.cancerType2 ? "Squamous Cell" : ""}`, 240, 350);
  doc.text(`${req.body.cancerType3 ? "Melanoma" : ""}`, 340, 350);

  doc.font("Times-Roman");
  doc.text("TMJ", 50, 390);
  doc.text(`${req.body.tmj ? "Yes" : "No"}`, 145, 390);

  doc.text("Constipation", 50, 410);
  doc.text(`${req.body.constipation ? "Yes" : "No"}`, 145, 410);

  doc.text("Crohn's/IBS", 50, 430);
  doc.text(`${req.body.crohns ? "Yes" : "No"}`, 145, 430);

  doc.text("Heart Disease", 50, 450);
  doc.text(`${req.body.heartDisease ? "Yes" : "No"}`, 145, 450);

  doc.text("Contact Lenses", 50, 470);
  doc.text(`${req.body.contactLenses ? "Yes" : "No"}`, 145, 470);

  doc.text("Hearing Aids", 50, 490);
  doc.text(`${req.body.hearingAids ? "Yes" : "No"}`, 145, 490);

  doc.text("Anxiety/Depression", 50, 510);
  doc.text(`${req.body.anxiety ? "Yes" : "No"}`, 145, 510);

  doc.text("OCD", 50, 530);
  doc.text(`${req.body.ocd ? "Yes" : "No"}`, 145, 530);

  //-right side -------------------------------

  doc.text("Cancer", 300, 390);
  doc.text(`${req.body.cancer ? "Yes" : "No"}`, 395, 390);

  doc.text("Cancer", 300, 410);
  doc.text(`${req.body.cancer ? "Yes" : "No"}`, 395, 410);

  doc.text("Diabetes", 300, 430);
  doc.text(`${req.body.diabetes ? "Yes" : "No"}`, 395, 430);

  doc.text("Epilepsy", 300, 450);
  doc.text(`${req.body.epilepsy ? "Yes" : "No"}`, 395, 450);

  doc.text("Hepatitis B/C", 300, 470);
  doc.text(`${req.body.hep ? "Yes" : "No"}`, 395, 470);

  doc.text("HIV", 300, 490);
  doc.text(`${req.body.hiv ? "Yes" : "No"}`, 395, 490);

  doc.text("Lupus", 300, 510);
  doc.text(`${req.body.lupus ? "Yes" : "No"}`, 395, 510);

  doc.text("Thyroid Disorder", 300, 530);
  doc.text(`${req.body.thyroid ? "Yes" : "No"}`, 395, 530);

  doc.text("Herpes Simplex (Cold Sores)", 50, 550);
  doc.text(`${req.body.herpes ? "Yes" : "No"}`, 225, 550);

  doc.rect(50, 580, 510, 0).stroke();

  doc.text("WOMEN:", 50, 610, {
    underline: true,
  });
  doc.text("Birth Control", 50, 630);
  doc.text(`${req.body.birthControl ? "Yes" : "No"}`, 145, 630);

  doc.text("How long?", 300, 630);
  doc.text(req.body.birthLong, 395, 630);

  doc.text("Menopause", 50, 650);
  doc.text(`${req.body.menopause ? "Yes" : "No"}`, 145, 650);

  doc.text("Pregnant", 50, 670);
  doc.text(`${req.body.preg ? "Yes" : "No"}`, 145, 670);

  doc.text("Breastfeeding", 50, 690);
  doc.text(`${req.body.breastfeeding ? "Yes" : "No"}`, 145, 690);

  doc.text("Polycyctic Ovaries", 300, 650);
  doc.text(`${req.body.ovaries ? "Yes" : "No"}`, 395, 650);

  doc.text("Hormone Replacement Therapy", 300, 670);
  doc.text(`${req.body.hormone ? "Yes" : "No"}`, 475, 670);

  doc.text("Hysterectomy", 50, 710);
  doc.text(`${req.body.hyster ? "Yes" : "No"}`, 145, 710);

  doc.text("When?", 300, 710);
  doc.text(req.body.hysterWhen, 395, 710);

  doc.rect(50, 740, 510, 0).stroke();

  doc.addPage();

  doc.text("COSMETIC MEDICAL HISTORY:", 50, 70, {
    underline: true,
  });
  doc.text("Dermatologist:", 50, 90);
  doc.text(req.body.derma, 145, 90);

  doc.text("Reason:", 300, 90);
  doc.text(req.body.dermaReason, 395, 90);

  doc.text("Accutane:", 50, 110);
  doc.text(`${req.body.accutane ? "Yes" : "No"}`, 145, 110);

  doc.text("Oral Antibiotics:", 50, 130);
  doc.text(`${req.body.anitbiotics ? "Yes" : "No"}`, 145, 130);

  doc.text("Retin-A:", 300, 110);
  doc.text(`${req.body.retin ? "Yes" : "No"}`, 395, 110);

  doc.text("Strength:", 450, 110);
  doc.text(req.body.retinStrength, 500, 110);

  doc.text("Hydrocortisone:", 300, 130);
  doc.text(`${req.body.hydro ? "Yes" : "No"}`, 395, 130);

  doc.text("Strength:", 450, 130);
  doc.text(req.body.hydroStrength, 500, 130);

  doc.text("Time used:", 50, 150);
  doc.text(req.body.medLength, 145, 150);

  doc.text("Injections:", 50, 170);

  doc.text("Botox:", 50, 190);
  doc.text(`${req.body.botox ? "Yes" : "No"}`, 145, 190);
  doc.text("Restylane/Perlane:", 50, 210);
  doc.text(`${req.body.resty ? "Yes" : "No"}`, 145, 210);
  doc.text("Artecoll:", 50, 230);
  doc.text(`${req.body.artecoll ? "Yes" : "No"}`, 145, 230);
  doc.text("Laser Resurfacing:", 50, 250);
  doc.text(`${req.body.laserSurface ? "Yes" : "No"}`, 145, 250);

  doc.text("Laser/IPL Hair Removal:", 300, 190);
  doc.text(`${req.body.laserRemove ? "Yes" : "No"}`, 435, 190);

  doc.text("Thermage:", 300, 210);
  doc.text(`${req.body.thermage ? "Yes" : "No"}`, 395, 210);

  doc.text("IPL/Sclerotherapy:", 300, 230);
  doc.text(`${req.body.ipl ? "Yes" : "No"}`, 395, 230);

  doc.text("What area?", 50, 270);
  doc.text(req.body.injectAreas, 145, 270);

  doc.text("Happy with results?", 50, 290);
  doc.text(req.body.injectHappy, 145, 290);

  doc.text("Facials:", 50, 310);
  doc.text(`${req.body.facials ? "Yes" : "No"}`, 145, 310);

  doc.text("Microdermabraison:", 50, 330);
  doc.text(`${req.body.microderm ? "Yes" : "No"}`, 145, 330);

  doc.text("Chemical Peels:", 50, 350);
  doc.text(`${req.body.chempeel ? "Yes" : "No"}`, 145, 350);

  doc.text("Glycolic/Lactic Acid Peels:", 300, 310);
  doc.text(`${req.body.lacticPeel ? "Yes" : "No"}`, 435, 310);

  doc.text("Salicylic Acid Peels:", 300, 330);
  doc.text(`${req.body.salicPeel ? "Yes" : "No"}`, 395, 330);

  doc.text("Last Treatment:", 50, 370);
  doc.text(req.body.lastTreat, 145, 370);

  doc.text("Happy with results?", 300, 370);
  doc.text(req.body.peelHappy, 395, 370);

  doc.rect(50, 400, 510, 0).stroke();

  doc.text("LIFESTYLE", 50, 430, {
    underline: true,
  });

  doc.text("Occupation:", 50, 450);
  doc.text(req.body.occupation, 145, 450);
  doc.text(req.body.fullpart, 300, 450);

  doc.text("Stress level:", 50, 470);
  doc.text(req.body.stress, 145, 470);

  doc.text("Handle stress well:", 300, 470);
  doc.text(req.body.stressWell, 395, 470);

  doc.text("Sleep pattern:", 50, 490);
  doc.text(req.body.sleepHours, 145, 490);

  doc.text("Diet:", 300, 490);
  doc.text(req.body.diet, 395, 490);

  doc.text("Vitamins:", 50, 510);
  doc.text(req.body.vitamins, 145, 510);

  doc.text("Daily coffee:", 300, 510);
  doc.text(req.body.coffee, 395, 510);

  doc.text("Daily water:", 50, 530);
  doc.text(req.body.water, 145, 530);

  doc.text("Daily alcohol:", 300, 530);
  doc.text(req.body.alcohol, 395, 530);

  doc.text("Daily cigarettes:", 50, 550);
  doc.text(req.body.cigs, 145, 550);

  doc.text("Exercise", 50, 570);

  doc.text("Cardio:", 50, 590);
  doc.text(`${req.body.cardio ? "Yes" : "No"}`, 145, 590);

  doc.text("Weights:", 50, 610);
  doc.text(`${req.body.weights ? "Yes" : "No"}`, 145, 610);

  doc.text("Stretching:", 50, 630);
  doc.text(`${req.body.stretch ? "Yes" : "No"}`, 145, 630);

  doc.text("Exercise how often?", 300, 590);
  doc.text(req.body.exerciseOften, 395, 590);

  doc.rect(50, 660, 510, 0).stroke();

  doc.addPage();

  doc.text("SKIN CONDITIONS", 50, 90, {
    underline: true,
  });
  doc.text("Acne:", 50, 110);
  doc.text(`${req.body.acne ? "Yes" : "No"}`, 140, 110);

  doc.text("Blackheads:", 50, 130);
  doc.text(`${req.body.blackheads ? "Yes" : "No"}`, 140, 130);

  doc.text("Eczema:", 50, 150);
  doc.text(`${req.body.eczema ? "Yes" : "No"}`, 140, 150);

  doc.text("Whiteheads:", 50, 170);
  doc.text(`${req.body.whiteheads ? "Yes" : "No"}`, 140, 170);

  doc.text("Sensitive Skin:", 50, 190);
  doc.text(`${req.body.senskin ? "Yes" : "No"}`, 140, 190);

  doc.text("Uneven Pigment:", 50, 210);
  doc.text(`${req.body.pigment ? "Yes" : "No"}`, 140, 210);

  doc.text("Acne Rosacea:", 50, 230);
  doc.text(`${req.body.rosacea ? "Yes" : "No"}`, 140, 230);

  doc.text("Congested Skin:", 50, 250);
  doc.text(`${req.body.congskin ? "Yes" : "No"}`, 140, 250);

  doc.text("Elasticity Loss:", 50, 270);
  doc.text(`${req.body.elastic ? "Yes" : "No"}`, 140, 270);

  //-------------------------2nd column

  doc.text("Psoriasis:", 225, 110);
  doc.text(`${req.body.psoriasis ? "Yes" : "No"}`, 315, 110);

  doc.text("Sun Damage:", 225, 130);
  doc.text(`${req.body.sundamage ? "Yes" : "No"}`, 315, 130);

  doc.text("Uneven Texture:", 225, 150);
  doc.text(`${req.body.uneventext ? "Yes" : "No"}`, 315, 150);

  doc.text("Acne Scars:", 225, 170);
  doc.text(`${req.body.scars ? "Yes" : "No"}`, 315, 170);

  doc.text("Dark Circles:", 225, 190);
  doc.text(`${req.body.darkCircles ? "Yes" : "No"}`, 315, 190);

  doc.text("Enlarged Pores:", 225, 210);
  doc.text(`${req.body.pores ? "Yes" : "No"}`, 315, 210);

  doc.text("Rosacea:", 225, 230);
  doc.text(`${req.body.ros ? "Yes" : "No"}`, 315, 230);

  doc.text("Vitiligo:", 225, 250);
  doc.text(`${req.body.vitiligo ? "Yes" : "No"}`, 315, 250);

  doc.text("Aging Skin:", 225, 270);
  doc.text(`${req.body.aging ? "Yes" : "No"}`, 315, 270);

  //---------------------------------3rd column

  //-------------------------3rd column

  doc.text("Dermatitis:", 400, 110);
  doc.text(`${req.body.dermatitis ? "Yes" : "No"}`, 490, 110);

  doc.text("Freckles/Moles:", 400, 130);
  doc.text(`${req.body.freckles ? "Yes" : "No"}`, 490, 130);

  doc.text("Scars (Non-acneic):", 400, 150);
  doc.text(`${req.body.scarsNoAcne ? "Yes" : "No"}`, 490, 150);

  doc.text("Back/Chest Acne:", 400, 170);
  doc.text(`${req.body.backne ? "Yes" : "No"}`, 490, 170);

  doc.text("Dry Skin:", 400, 190);
  doc.text(`${req.body.dryskin ? "Yes" : "No"}`, 490, 190);

  doc.text("Lines/Wrinkles:", 400, 210);
  doc.text(`${req.body.wrinkles ? "Yes" : "No"}`, 490, 210);

  doc.text("Sebhorrea:", 400, 230);
  doc.text(`${req.body.sebhorrea ? "Yes" : "No"}`, 490, 230);

  doc.text("Eye Puffiness:", 400, 250);
  doc.text(`${req.body.puffy ? "Yes" : "No"}`, 490, 250);

  doc.text("Telangiectasia:", 400, 270);
  doc.text(`${req.body.capilaries ? "Yes" : "No"}`, 490, 270);

  doc.text("Primary concerns:", 50, 290);
  doc.text(`1. ${req.body.concern1}`, 50, 310);
  doc.text(`2. ${req.body.concern2}`, 50, 330);
  doc.text(`3. ${req.body.concern3}`, 50, 350);

  doc.rect(50, 380, 510, 0).stroke();

  doc.text("SUN EXPOSURE / REACTION", 50, 410, {
    underline: true,
  });

  doc.text("How do you react to the sun?", 50, 430);
  doc.text(req.body.sunReact, 200, 430);

  doc.text("How dark can your skin turn?", 50, 450);
  doc.text(req.body.darkSkin, 200, 450);

  doc.text("Have you blistered from a sunburn?", 50, 470);
  doc.text(`${req.body.sunblister ? "Yes" : "No"}`, 220, 470);

  doc.text("Blister area?", 50, 490);
  doc.text(req.body.blisterArea, 145, 490);

  doc.text("How do you tan?", 50, 510);
  doc.text(req.body.tanhow, 145, 510);

  doc.text("How often do you tan?", 50, 530);
  doc.text(req.body.tanoften, 190, 530);

  doc.text("What is your natural non-exposed skin color?", 50, 550);
  doc.text(req.body.skincolor, 290, 550);

  doc.rect(50, 575, 510, 0).stroke();

  doc.text("GENETIC HISTORY", 50, 600, {
    underline: true,
  });

  doc.text("Ethnicity:", 50, 620);
  doc.text(req.body.ethnic, 145, 620);

  doc.text("Eye Color:", 300, 640);
  doc.text(req.body.eyecolor, 395, 640);

  doc.text("Hair Color:", 50, 640);
  doc.text(req.body.haircolor, 145, 640);

  doc.text("Contact for Botox/filler promotions?", 50, 660);
  doc.text(req.body.promotions, 235, 660);

  doc.text("Contact for skin care assistance?", 300, 660);
  doc.text(req.body.skinCare, 485, 660);

  doc.image(req.body.trimmedSignature, 50, 670, { width: 150 });

  doc.addPage();
  doc.image(__dirname + "/aestheticEND.jpg", 10, 10, { width: 600 });

  doc.end();

  // res.json({
  //   success: true,
  //   message: "thanks for contacting us.",
  // });
  try {
    const mailOptions = {
      from: "sean@suhbae.com",
      to: "sean@suhbae.com",
      subject: `Aesthetics - ${req.body.name}`,
      html: req.body.date,
      html: req.body.name,
      attachments: [
        {
          filename: `Aesthetics_${fileName}_${secondsId}.pdf`,
          path: __dirname + `/Aesthetics_${fileName}_${secondsId}.pdf`,
          contentType: "application/pdf",
        },
      ],
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: "somthing went wrong, try again",
        });
      } else {
        res.send({
          success: true,
          message: "thanks for contacting us.",
        });
      }
    });
  } catch (error) {
    res.sendStatus(500).send({
      success: false,
      message: "Somting went wrong, try again later",
    });
  }
});

// app.use(express.static(path.join(__dirname, "../")));

app.listen(3030, () => {
  console.log("server on port 3030");
});
