export const WeatherCard = () => {

    
    return (
        <div className="col-md-2">
            <div className="card" style={{ borderRadius: "0.5rem" }}>
                <div className="card-body">
                    <span style={{ fontSize: "1.5rem" }}>23°C</span>
                    <br />
                    <small className="text-muted" style={{ fontSize: "0.9rem" }}>
                        2023-02-05
                    </small>
                </div>
            </div>
        </div>
    )
}