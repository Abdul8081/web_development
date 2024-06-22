import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        /* yaha prr spread function copy karne k liye use ho raha hai */
                        /*Jb bhi map wala funtion use kar rahe hai to key value pass karna hai */
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;