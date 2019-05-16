function wan(v){
    if(v<10000){
        return v;
    }

    return (v/10000).toFixed(1)+"万";

}

export default wan;
