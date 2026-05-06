/**
 * @fileoverview Data array for team comments/testimonials.
 * Contains team member details, roles, and multilingual comments for display.
 */

/**
 * Represents a team comment/testimonial entry.
 * @typedef {Object} TeamComment
 * @property {string} name - The name of the team member.
 * @property {string} role - The role or position of the team member.
 * @property {string} comment_en - The comment in English.
 * @property {string} comment_de - The comment in German.
 * @property {string} imgsrc - Path to the team member's image.
 * @property {string} class - CSS class for the image.
 */

/**
 * Array of team comments/testimonials.
 * @type {TeamComment[]}
 */
const teamComments = [
    {
        name: "V. Schuster",
        role: "Team Partner",
        comment_en: "David really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
        comment_de:"David hat das Team mit seiner starken Organisation und klaren Kommunikation maßgeblich zusammengehalten. Ohne seinen Einsatz wären wir nicht so weit gekommen.",
        imgsrc: "./assets/img/v-schuster.png",
        class : "schuster-img"
    },
    {
        name: "E. Eichinger",
        role: "Team Partner",
        comment_en: "David was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.",
        comment_de:"David war ein sehr geschätzter Teamkollege bei DA. Sein positives Engagement und seine Bereitschaft, Verantwortung zu übernehmen, haben wesentlich dazu beigetragen, dass wir unsere Ziele erreicht haben.",
        imgsrc: "./assets/img/e-eichinger.png",
        class : "eichinger-img"
    },
    {
        name: "I. Nuber",
        role: "Frontend Engineer",
        comment_en: "It was a great pleasure to work with David. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.",
        comment_de: "Es war eine große Freude, mit David zusammenzuarbeiten. Er weiß, wie man Teammitglieder motiviert und dazu anspornt, ihr bestes Arbeitsergebnis zu liefern, und bringt sich stets aktiv in Brainstorming-Prozesse ein. Auch für das Wohlbefinden des Teams war er immer ansprechbar, unterstützend und hilfsbereit und überzeugte zudem mit einem großartigen Sinn für Humor.",
        imgsrc: "./assets/img/i-nuber.png",
        class : "nuber-img"
    }
]