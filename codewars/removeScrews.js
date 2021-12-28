function sc(screws){
    let screwdriver = screws.split("")[0];
    return screws.split("").reduce( (totalSec, currentScrew) => {
            return screwdriver == currentScrew ? totalSec + 2 : (screwdriver = currentScrew, totalSec + 7);
        }, 0) - 1;
}