function packBox(item, name, address, callback) {
    console.log(`Put the ${item} in the box`);
    callback(item, name, address);


}

function addressPackage(item, name, address) {
    console.log(`Addressed the box to ${address}
    and ready to send the ${item} gift to ${name}`);
}

packBox("shirt", "Dominic", "Philippines", addressPackage);