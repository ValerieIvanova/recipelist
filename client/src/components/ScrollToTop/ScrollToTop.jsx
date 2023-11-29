import './scrollToTop.css'

export default function ScrollToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div
          className="dmtop"
          onClick={() => {scrollToTop()}}
        >
          Scroll to Top
        </div>
    )
}