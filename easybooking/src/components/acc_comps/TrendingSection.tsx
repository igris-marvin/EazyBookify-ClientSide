import hotelBook from '../../assets/images/acc_images/HOTEL-BOOK.jpeg'
import artBoard from '../../assets/images/acc_images/Artboard-1.png'

export const TrendingSection = () => {

    // fetch images

    return (
        <>
            <section className="Trandinding">

                <div className="container mycontainer">
                    <h1 >Popular/Trending</h1>

                    <div id="slider" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col">
                                        <a href="#trand0"><img src={hotelBook} className="d-block w-100" alt="Placeholder Image 1" /></a>
                                    </div>
                                    <div className="col">
                                        <a href="#trand1"><img src={artBoard} className="d-block w-100" alt="Placeholder Image 2" /></a>
                                    </div>
                                    <div className="col">
                                        <a href="#trand2"><img src={artBoard} className="d-block w-100" alt="Placeholder Image 3" /></a>
                                    </div>
                                    <div className="col">
                                        <a href="#trand3"><img src={artBoard} className="d-block w-100" alt="Placeholder Image 4" /></a>
                                    </div>
                                    <div className="col">
                                        <a href="#trand4"><img src={artBoard} className="d-block w-100" alt="Placeholder Image 5" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col">
                                        <a href="#trand6"><img src={artBoard} className="d-block w-100" alt="Placeholder Image 6" /></a>
                                    </div>
                                    <div className="col">
                                        <a href="#trand7"><img src={artBoard} className="d-block w-100" alt="Placeholder Image 7" /></a>
                                    </div>
                                    <div className="col">
                                        <a href="#trand8"><img src={artBoard} className="d-block w-100" alt="Placeholder Image 8" /></a>
                                    </div>
                                    <div className="col">
                                        <a href="#trand9"><img src={artBoard} className="d-block w-100" alt="Placeholder Image 9" /></a>
                                    </div>
                                    <div className="col">
                                        <a href="#trand10"><img src={artBoard} className="d-block w-100" alt="Placeholder Image 10" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev nextBtn" type="button" data-bs-target="#slider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next nextBtn" type="button" data-bs-target="#slider" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}