function MovieForm(props) {
    return (
        <h1>
            {"Movie: " + props.match.params.id}
        </h1>
    );
};

export default MovieForm;