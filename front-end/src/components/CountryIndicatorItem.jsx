export const CountryIndicatorItem = ({ title, value }) => {
    return (
        <div className="col-md-6">
            <small
                className="text-muted"
                style={{ fontSize: "0.9rem" }}
            >
                {title}
            </small>
            <br />
            <span style={{ fontSize: "1.5rem" }}>{value}</span>
        </div>
    )
}