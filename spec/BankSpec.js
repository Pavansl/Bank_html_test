describe('Testing the Business Loan Application', ()=>{
    it("Check for Full Name", ()=>{
        const res = fullnameTest("Harsha");
        expect(res).toBeTruthy();
    })
    it("Check for Phone No.", ()=>{
        const res = phonenoTest("7996485910");
        expect(res).toBeTruthy();
    })
    it("Check for Address", ()=>{
        const res = addressTest("Kolar");
        expect(res).toBeTruthy();
    })
    it("Check for Branch", ()=>{
        const res = branchTest("Kolar");
        expect(res).toBeTruthy();
    })
    it("Check for Business Name", ()=>{
        const res = businessnameTest("New Company");
        expect(res).toBeTruthy();
    })
    it("Check for Amount", ()=>{
        const res = amountTest("100000");
        expect(res).toBeTruthy();
    })
    it("Check for Loan Tenure", ()=>{
        const res = loantenureTest("5");
        expect(res).toBeTruthy();
    })
});

describe('Testing the Create Account', ()=>{
    it("Check for First Name", ()=>{
        const res = firstnameTest("Harsha");
        expect(res).toBeTruthy();
    })
    it("Check for Second Name", ()=>{
        const res = secondnameTest("C.A");
        expect(res).toBeTruthy();
    })
    it("Check for Phone No.", ()=>{
        const res = phonenoTest("7996485901");
        expect(res).toBeTruthy();
    })
    it("Check for E-mail Address", ()=>{
        const res = emailTest("harshaca@gmail.com");
        expect(res).toBeTruthy();
    })
    it("Check for Address", ()=>{
        const res = addressTest("Kolar");
        expect(res).toBeTruthy();
    })
    it("Check for Password", ()=>{
        const res = passwordTest("harsha@123");
        expect(res).toBeTruthy();
    })
    it("Check for Confirm Password", ()=>{
        const res = confirmpasswordTest("harsha@123");
        expect(res).toBeTruthy();
    })
});

describe('Testing the Forgot Password', ()=>{
    it("Check for Customer ID", ()=>{
        const res = customeridTest("2634");
        expect(res).toBeTruthy();
    })
    it("Check for E-mail Address", ()=>{
        const res = emailTest("harshaca@gmail.com");
        expect(res).toBeTruthy();
    })
});

describe('Testing the Home Loan', ()=>{
    it("Check for Name", ()=>{
        const res = nameTest("Harsha");
        expect(res).toBeTruthy();
    })
    it("Check for Phone No.", ()=>{
        const res = phonenoTest("7996485901");
        expect(res).toBeTruthy();
    })
    it("Check for Address", ()=>{
        const res = addressTest("Kolar");
        expect(res).toBeTruthy();
    })
    it("Check for Branch", ()=>{
        const res = branchTest("Kolar");
        expect(res).toBeTruthy();
    })
    it("Check for Amount", ()=>{
        const res = amountTest("100000");
        expect(res).toBeTruthy();
    })
    it("Check for Loan Tenure", ()=>{
        const res = loantenureTest("5");
        expect(res).toBeTruthy();
    })
});

describe('Testing the Apply for Loan on Credit Card', ()=>{
    it("Check for Name", ()=>{
        const res = nameTest("Harsha");
        expect(res).toBeTruthy();
    })
    it("Check for Phone No.", ()=>{
        const res = phonenoTest("7996485901");
        expect(res).toBeTruthy();
    })
    it("Check for Credit Card No.", ()=>{
        const res = cardtest("9874321685216431");
        expect(res).toBeTruthy();
    })
    it("Check for PIN", ()=>{
        const res = pinTest("123456");
        expect(res).toBeTruthy();
    })
    it("Check for Password", ()=>{
        const res = passwordTest("harsha");
        expect(res).toBeTruthy();
    })
});

describe('Testing the Account Login', ()=>{
    it("Check for Customer ID", ()=>{
        const res = customeridTest("2634");
        expect(res).toBeTruthy();
    })
    it("Check for PIN", ()=>{
        const res = pinTest("123456");
        expect(res).toBeTruthy();
    })
    it("Check for Password", ()=>{
        const res = passwordTest("harsha");
        expect(res).toBeTruthy();
    })
});

describe('Testing the To check Transaction Details', ()=>{
    it("Check for Customer ID", ()=>{
        const res = customeridTest("2634");
        expect(res).toBeTruthy();
    })
    it("Check for PIN", ()=>{
        const res = pinTest("123456");
        expect(res).toBeTruthy();
    })
    it("Check for Password", ()=>{
        const res = passwordTest("harsha");
        expect(res).toBeTruthy();
    })
});

describe('Testing the Net Banking', ()=>{
    it("Check for Customer ID", ()=>{
        const res = customeridTest("2634");
        expect(res).toBeTruthy();
    })
    it("Check for Valid Through", ()=>{
        const res = validTest("06/25");
        expect(res).toBeTruthy();
    })
    it("Check for Password", ()=>{
        const res = passwordTest("harsha");
        expect(res).toBeTruthy();
    })
    it("Check for PIN", ()=>{
        const res = pinTest("123456");
        expect(res).toBeTruthy();
    })
});

describe('Testing the Personal Loan Application form', ()=>{
    it("Check for Full Name", ()=>{
        const res = fullnameTest("Harsha");
        expect(res).toBeTruthy();
    })
    it("Check for E-mail Address", ()=>{
        const res = emailTest("harshaca@gmail.com");
        expect(res).toBeTruthy();
    })
    it("Check for Phone No.", ()=>{
        const res = phonenoTest("7996485910");
        expect(res).toBeTruthy();
    })
    it("Check for Account No.", ()=>{
        const res = accountnotest("9874321685211111");
        expect(res).toBeTruthy();
    })
    it("Check for IFSC", ()=>{
        const res = ifscTest("SHSBK000011");
        expect(res).toBeTruthy();
    })
    it("Check for Branch", ()=>{
        const res = branchTest("Kolar");
        expect(res).toBeTruthy();
    })
});

describe('Testing the Statement on E-mail', ()=>{
    it("Check for Customer ID", ()=>{
        const res = customeridTest("2634");
        expect(res).toBeTruthy();
    })
    it("Check for E-mail Address", ()=>{
        const res = emailTest("harshaca@gmail.com");
        expect(res).toBeTruthy();
    })
    it("Check for Password", ()=>{
        const res = passwordTest("harsha");
        expect(res).toBeTruthy();
    })
    it("Check for PIN", ()=>{
        const res = pinTest("123456");
        expect(res).toBeTruthy();
    })
});   
