import client from "../../../../libs/client";
export const updateMovie = async (_parent, _arg, _ctx) => {
    const { id, year } = _arg;
    return client.movie.update({
        where: { id },
        data: {
            year,
        },
    });
};
