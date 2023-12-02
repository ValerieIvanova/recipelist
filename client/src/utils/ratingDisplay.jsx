export default function ratingDisplay(popularity) {
    return popularity === 0 ? "No rating yet!" : (
        Array.from({ length: popularity }, (_, index) => index).map((_, index) => (
            <i key={index} className="fa fa-star"></i>
        ))
    );
}