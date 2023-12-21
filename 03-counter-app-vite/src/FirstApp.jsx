import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle, name}) => {
    return (
        <>
            {/* <div data-testid="test-title">{title}</div> */}
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    subTitle: 'Subtitulo',
    name: 'Alber',
}