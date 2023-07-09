import client from "../../../../libs/client";
export const createMovie = async (_parent, _arg, _ctx) => {
    const { title, year, genre } = _arg;
    return client.movie.create({
        data: {
            title,
            year,
            genre,
        },
    });
};
