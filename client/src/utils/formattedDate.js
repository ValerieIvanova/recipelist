export default function formatDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    })
    return formattedDate
    console.log(formattedDate);
}
