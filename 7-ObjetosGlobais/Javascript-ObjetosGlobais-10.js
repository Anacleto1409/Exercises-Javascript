function superficieDaPiramideQuadrada(ladodabase, altura){
    let altura1 = Math.hypot((ladodabase/2),altura)
    let areatrig = 4*((ladodabase*altura1)/2)
    let areabases = ladodabase*ladodabase
    return areabases + areatrig
}