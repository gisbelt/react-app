// import PropTypes from 'prop-types';

export const Quote = ({ quote, author }) => {

    return (
        <>
            <figure className="text-end">
                <blockquote className="blockquote">
                    <p className="mb-1">{ quote }</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    <cite title="Source Title">{ author }</cite>
                </figcaption>
            </figure>
        </>
    )
}

// Quote.propTypes = {
//     quote: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
// }