window.onload = function () {

    console.log(makePairs(sortBucket([4, 4, 1, 2]), 6));

}

var rowList = [];

function sortBucket(people) {

    bucketList = [];
    bucketList[0] = 0;
    bucketList[1] = 0;
    bucketList[2] = 0;
    bucketList[3] = 0;
    bucketList[4] = 0;
    bucketList[5] = 0;
    bucketList[6] = 0;

    for (let i = 0; i < people.length; i++) {
        bucketList[people[i]]++;
    }

    return bucketList;
}

function makePairs(bucketList, rowCapacity) {

    for (let i = bucketList.length - 1; i > 0; i--) {

        //if bucket is empty

        if (bucketList[i] == 0) {
            continue;
        }

        //if it is last or last-1 bucket

        if (i == rowCapacity) {

            // push row
            for (let j = 0; j < bucketList[i]; j++) {

                rowList.push(i);

            }

            bucketList[i] = 0;
            continue;
        }

        if (i == rowCapacity - 1) {

            //push row and one empty seat
            for (let j = 0; j < bucketList[i]; j++) {

                rowList.push(i);
                rowList.push('0');

            }

            bucketList[i] = 0;
            continue;
        }

        // for pairs that can accomplish each other

        if (i >= (bucketList.length - 1) / 2) {

            //push it with its accompaniment in list of rows
            let fullRows;

            if (bucketList[i] <= bucketList[rowCapacity - (i + 1)]) {
                fullRows = bucketList[i];
            } else {
                fullRows = bucketList[rowCapacity - (i + 1)];
            }


            for (let j = 0; j < fullRows; j++) {

                rowList.push(i);
                rowList.push('0');
                rowList.push(rowCapacity - (i + 1));

            }

            bucketList[rowCapacity - (i + 1)] -= fullRows;
            bucketList[i] -= fullRows;


            // bucket size is more than its accompaniment
            // need to split next value into 2

            if (bucketList[i] - bucketList[rowCapacity - (i + 1)] > 0) {

                //list all buckets from accompaniment to current bucket (for ex. 1-4 if row size is 6)
                let isAll = true;

                for (let j = rowCapacity - (i + 1); j < i; j++) {

                    console.log("j = " + j);
                    console.log("i = " + i);

                    if (bucketList[i] == 0) {
                        break;
                    }

                    //if current value is 0 skip
                    if (j == 0) {
                        continue;
                    }

                    // if there is accompaniment then input it

                    if (j == rowCapacity - (i + 1) && bucketList[j] != 0) {

                        fullRows = 0;

                        if (bucketList[i] <= bucketList[j]) {
                            fullRows = bucketList[i];
                        } else {
                            fullRows = bucketList[j];
                        }

                        for (let j = 0; j < fullRows; j++) {

                            rowList.push(i);
                            rowList.push('0');
                            rowList.push(j);

                        }

                        bucketList[j] -= fullRows;
                        bucketList[i] -= fullRows;
                        continue
                    }

                    // if all values before big bucket are 0 break the loop

                    isAll = true;

                    for (let x = rowCapacity - (i + 1); x < i; x++) {
                        if (bucketList[x] != 0) {
                            isAll = false;
                        }
                    }

                    if(isAll){break;}

                    // divide value into accomponiment and another value

                    rowList.push(i);
                    rowList.push('0');
                    rowList.push(rowCapacity - (i + 1));

                    bucketList[j - (rowCapacity - (i + 1))]++;
                    bucketList[j]--;

                    j = rowCapacity - (i + 1);

                }

                if (bucketList[i] != 0) {

                    for (let k = 0; k < bucketList[i]; k++) {

                        rowList.push(i);
                        rowList.push('0');

                    }

                    bucketList[i] = 0;
                }

            }

        }

        console.log(bucketList);

    }

    return rowList;

}

// function makePairs(bucketList, correspondingElement, lastElementOrder, rowCapacity, pairList){
//     if(lastElementOrder == 0){
//         return pairList;
//     } else {
//         if(bucketList[lastElementOrder] != 0){

//             if(bucketList[rowCapacity - bucketList[lastElementOrder]] == ){

//             }

//             bucketList[lastElementOrder] += bucketList[rowCapacity - bucketList[lastElementOrder]];


//         } else {
//             makePairs(bucketList, correspondingElement + 1, lastElementOrder - 1, rowCapacity, pairList);
//         }


//     }
// }