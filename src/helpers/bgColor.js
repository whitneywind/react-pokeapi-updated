const findBgColor = (kind) => {
        let bgColor = '';
        switch (kind) {
            case "fire":
                bgColor = "bg-red-600";
                break;
            case "water":
                bgColor = "bg-sky-400";
                break;
            case "grass":
                bgColor = "bg-green-500";
                break;
            case "bug":
                bgColor = "bg-red-600";
                break;
            case "electric":
                bgColor = "bg-amber-300";
                break;
            case "psychic":
                bgColor = "bg-violet-800";
                break;
            case "ground":
                bgColor = "bg-yellow-600";
                break;
            case "ice":
                bgColor = "bg-cyan-200";
                break;
            case "dark":
                bgColor = "bg-indigo-900";
                break;
            case "fairy":
                bgColor = "bg-pink-300";
                break;
            case "normal":
                bgColor = "bg-slate-400";
                break;
            case "fighting":
                bgColor = "bg-amber-600";
                break;
            default: 
                bgColor = "bg-zinc-500";
        }
        return bgColor;
};

export default findBgColor;