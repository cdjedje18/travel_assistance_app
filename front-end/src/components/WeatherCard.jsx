export const WeatherCard = ({ temp, date }) => {


    return (
        <div className="col-md-3">
            <div className="card" style={{ borderRadius: "0.5rem" }}>
                <div className="card-body">
                    <span style={{ fontSize: "1.5rem" }}>{temp}°C</span>
                    <br />
                    <small className="text-muted" style={{ fontSize: "0.9rem" }}>
                        {date}
                    </small>
                </div>
            </div>
        </div>
    )
}