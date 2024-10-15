export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Billy',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Cris', 'Natalia']
}

const returnChildrenNumber = (passenger: Passenger): number => {

    // if (!passenger.children) return 0;

    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log(passenger.name, 'has', howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);