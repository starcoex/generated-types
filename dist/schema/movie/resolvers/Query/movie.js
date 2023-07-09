import client from "../../../../libs/client";
export const movie = async (_parent, _arg, _ctx) => {
    const { id } = _arg;
    return client.movie.findFirst({ where: { id } });
};
