// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo


let bankBranchInstance = null;


class bankBranch {
    constructor(branchInfo) {
        if (!bankBranchInstance) {
            this.bankInfo = branchInfo;
            bankBranchInstance = this;
        }
        return bankBranchInstance;
    }


getBranchInfo() {
    return this.bankInfo;
    }
}
const branchA = new bankBranch("First Branch")
console.log(branchA.getBranchInfo());
const branchB = new bankBranch("Second Branch")
console.log(branchB.getBranchInfo());

console.log(branchA === branchB)


// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
