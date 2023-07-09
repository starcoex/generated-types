import client from "../../../../libs/client";
export const deleteMovie = async (_parent, _arg, _ctx) => {
    const { id } = _arg;
    return client.movie.delete({ where: { id } });
};
