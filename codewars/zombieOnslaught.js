function zombie_shootout(zombies, range, ammo) {

    console.log(`zombies: ${zombies}`)
    console.log(`range: ${range}`)
    console.log(`ammo: ${ammo}`)

    let possibleShots = range / 0.5;
    let killedZombies = possibleShots > ammo ? ammo : possibleShots;

    if (ammo >= zombies && possibleShots >= zombies) {

        killedZombies = zombies;

        return `You shot all ${killedZombies} zombies.`;

    }

    killedZombies = possibleShots > ammo ? ammo : possibleShots;

    if (ammo >= possibleShots && ammo <= zombies) {
        return `You shot ${killedZombies} zombies before being eaten: overwhelmed.`;
    }

    return `You shot all ${killedZombies} zombies.`;
}