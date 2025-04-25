const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");

// module.exports = {
//   name: "Taher CV Theme",
//   render: async (resume) => {
//     // Load the HTML template
//     const templatePath = path.join(__dirname, "template.hbs");
//     const templateSource = fs.readFileSync(templatePath, "utf-8");
//     const template = Handlebars.compile(templateSource);

//     // Render and return the HTML
//     return template(resume);
//   },
//   renderPDF: async (resume) => {
//     // The same template will be used for PDF
//     const html = await module.exports.render(resume);
//     return html;
//   },
// };

function render(resume) {
  const templatePath = path.join(__dirname, "template.hbs");
  const templateSource = fs.readFileSync(templatePath, "utf-8");
  const template = Handlebars.compile(templateSource);
  return template(resume);
}

module.exports = {
  render: render,
  renderPDF: render, // Use same function for PDF rendering
  name: "Taher CV Theme",
};
