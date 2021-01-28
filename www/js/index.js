/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function bye() {
    // Testing login
    console.log('testing login...');
    window.plugins.rutoken.login(
        { pin: '24316785' },
        function() {
            console.log('PKCS11 login ok');
        
            var myCkaId = 'Plugin19012021135605';
            var myPemBase64 = 'MIIEyjCCA7KgAwIBAgIJAOcf+Ku5GznGMA0GCSqGSIb3DQEBBQUAMHgxCzAJBgNVBAYTAlJVMQ8wDQYDVQQIDAZSdXNzaWExDzANBgNVBAcMBk1vc2NvdzEXMBUGA1UECgwOWkFPIEFrdGl2LVNvZnQxEDAOBgNVBAsMB1J1dG9rZW4xHDAaBgNVBAMME1J1dG9rZW4gVEVTVCBDQSBSU0EwHhcNMjEwMTI4MDcwODA0WhcNMjIwMTI4MDcwODA0WjCB4zETMBEGA1UEAwwKQmVuZ3VzIFJTQTEPMA0GA1UEBAwGQmVuZ3VzMQ4wDAYDVQQqDAVCb3JpczEgMB4GCSqGSIb3DQEJARYRYmVuZ3VzYkBnbWFpbC5jb20xGjAYBgNVBAoMEdCY0J8g0JHQtdC90LPRg9GBMQswCQYDVQQGEwJSVTEVMBMGA1UECAwM0JzQvtGB0LrQstCwMRUwEwYDVQQHDAzQnNC+0YHQutCy0LAxMjAwBgNVBAkMKdCc0LDRgNGI0LDQu9CwINCh0L7QutC+0LvQvtCy0YHQutC+0LPQviAyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuwn81PW4Iv/9LxRE8QRKO9DUmyi2QcGZw8NzJawdvSSjxUKBPSrwAdHxEnRZIjtkDx7oocnHKKcVlr6In2W15Y1KioTT4Gs4Xfcp8QGkONV+6U3X043qmcBXBgvlt0ufq4n7XRqbZ+VhzlgKlwAaf+g2XuIA2XYANo19YzdvVZvoIUEgCdi+iSUKEl6EA94pU3GrstGWGwryR25ujS8ZkTihIfXdaHn03uFrPRb5CBrhnI7UinnfwqnO0TLOFtsthT/ijS0I80G+D7hWSQnigNqMacQTgyS+wBmGPIQje7F8YqZ25EKPgxj/1n3sPtbJ0QV8K+q3Y76lQr//Ea+F8wIDAQABo4HqMIHnMAsGA1UdDwQEAwIGwDATBgNVHSUEDDAKBggrBgEFBQcDBDATBgNVHSAEDDAKMAgGBiqFA2RxATAvBgUqhQNkbwQmDCTQodCa0JfQmCAi0KDRg9GC0L7QutC10L0g0K3QptCfIDIuMCIwOAYDVR0fBDEwLzAtoCugKYYnaHR0cDovL3JhLnJ1dG9rZW4ucnUvcm9vdF9jZXJ0cy9yc2EuY3JsMEMGCCsGAQUFBwEBBDcwNTAzBggrBgEFBQcwAoYnaHR0cDovL3JhLnJ1dG9rZW4ucnUvcm9vdF9jZXJ0cy9yc2EuY3J0MA0GCSqGSIb3DQEBBQUAA4IBAQBYzTfh8hVRBoHNtT7g9pwQwaWRic2S0zbnCXu4rZXTTaeIB755QbJ2oJkRqZYN4+Wmxf9BvYY7Y7vB+oFJ9LduTzAaIuTRzuIhSAy3nsXIeM5wWuF5WQVOLyOKXXgM2w8EQ0fZ87TjGN67xuvlPfZ5Q5QfW24vc+UV8N4ela/MWRnq31/Z/R7siEUYCt575ROsP1GGxxv/Hpnl7IxS63OS3K0/9RMnHWPZfHDLc7fGBf8Ii7kWIESajpFTuDOfTYNkU1OWKYJoAzyhAJPCtCgT8nkkhhvKJbJiS/O2kFb/T0vROORDBbxHssdZLeXzidIGvCEzMnDB2DfoxZHVUl5d';
            var anotherPemBase64 = 'MIIEHzCCAwegAwIBAgIJANLrHjHg7T+RMA0GCSqGSIb3DQEBBQUAMHgxCzAJBgNVBAYTAlJVMQ8wDQYDVQQIDAZSdXNzaWExDzANBgNVBAcMBk1vc2NvdzEXMBUGA1UECgwOWkFPIEFrdGl2LVNvZnQxEDAOBgNVBAsMB1J1dG9rZW4xHDAaBgNVBAMME1J1dG9rZW4gVEVTVCBDQSBSU0EwHhcNMjEwMTE5MTA1ODA3WhcNMjIwMTE5MTA1ODA3WjA5MRMwEQYDVQQDDApCZW5ndXMgUlNBMQswCQYDVQQGEwJSVTEVMBMGA1UECAwM0JzQvtGB0LrQstCwMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuwn81PW4Iv/9LxRE8QRKO9DUmyi2QcGZw8NzJawdvSSjxUKBPSrwAdHxEnRZIjtkDx7oocnHKKcVlr6In2W15Y1KioTT4Gs4Xfcp8QGkONV+6U3X043qmcBXBgvlt0ufq4n7XRqbZ+VhzlgKlwAaf+g2XuIA2XYANo19YzdvVZvoIUEgCdi+iSUKEl6EA94pU3GrstGWGwryR25ujS8ZkTihIfXdaHn03uFrPRb5CBrhnI7UinnfwqnO0TLOFtsthT/ijS0I80G+D7hWSQnigNqMacQTgyS+wBmGPIQje7F8YqZ25EKPgxj/1n3sPtbJ0QV8K+q3Y76lQr//Ea+F8wIDAQABo4HqMIHnMAsGA1UdDwQEAwIGwDATBgNVHSUEDDAKBggrBgEFBQcDBDATBgNVHSAEDDAKMAgGBiqFA2RxATAvBgUqhQNkbwQmDCTQodCa0JfQmCAi0KDRg9GC0L7QutC10L0g0K3QptCfIDIuMCIwOAYDVR0fBDEwLzAtoCugKYYnaHR0cDovL3JhLnJ1dG9rZW4ucnUvcm9vdF9jZXJ0cy9yc2EuY3JsMEMGCCsGAQUFBwEBBDcwNTAzBggrBgEFBQcwAoYnaHR0cDovL3JhLnJ1dG9rZW4ucnUvcm9vdF9jZXJ0cy9yc2EuY3J0MA0GCSqGSIb3DQEBBQUAA4IBAQBoEJzH45sKP1dklsOwGzeewtEr7J//bSMTgvqqTVlrXcHor8bsaXI2DXNe89UjW1cPLaZISDqPePKrr2Pcrzbchl2E+pDAF5DK87oJTSF3Ov3ZWtXrZ82QA6oyfvO0Q7cRBmkxlT0NMtvi+ZQ5vZm8EWUo4mb3UNhddaMirvAv5WJo1iRVaoiXKRSJ18+z0ylLPiOtbE+xm9p98BKL+5SUtFIQhETnOMLreFZZBxQ0xUNDcfuGYTMBfsqURE39AX4kfLjmCQnHmCpTgC/feccPGKIlPngL0Alo24aLcHyrFVdyIxfIMx2lBXsV/XubZply/sRmWH4l6L8JGhpDKHpy';
            var data = 'Bengus';
            // Testing encrypt
            console.log('testing cmsEncrypt...');
            window.plugins.rutoken.cmsEncrypt(
                {
                    certs: [
                        myPemBase64,
                        anotherPemBase64
                    ],
                    data: data
                },
                function(encryptedBase64) {
                    console.log('cmsEncrypt ok');
                    console.log(encryptedBase64);

                    // Testing decrypt
                    console.log('testing cmsDecrypt...');
                    window.plugins.rutoken.cmsDecrypt(
                        {
                            ckaId: myCkaId,
                            data: encryptedBase64
                        },
                        function(decrypted) {
                            console.log('cmsDecrypt ok');
                            console.log(decrypted);
                        
                            // Testing sign
                            console.log('testing cmsSign...');
                            window.plugins.rutoken.cmsSign(
                                {
                                    ckaId: myCkaId,
                                    data: data
                                },
                                function(signed) {
                                    console.log('cmsSign ok');
                                    console.log(signed);
                                },
                                function(error) {
                                    console.log(error);
                                }
                            );
                        
                        },
                        function(error) {
                            console.log(error);
                        }
                    );

                },
                function(error) {
                    console.log(error);
                }
            );
        
        },
        function(error) {
            console.log(error);
        }
    );
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    
    // Login, encrypt, decrypt and sign can be tested on tap to 'deviceready' indicator
    document.getElementById('deviceready').addEventListener('touchend', bye, false);
    
    // Testing initializeEngine
    window.plugins.rutoken.initializeEngine(
        function() {
            console.log('PKCS11 initialization ok');
        
            // Testing getTokens
            window.plugins.rutoken.getTokens(
                function(tokens) {
                    var jsonTokens = JSON.parse(tokens);
                    console.log(jsonTokens);
                
                    // Testing waitForSlotEvent
                    console.log('start listening waitForSlotEvent');
                    window.plugins.rutoken.waitForSlotEvent(
                        function(event) {
                            var jsonEvent = JSON.parse(event);
                            if (jsonEvent.event == 'add') {
                                console.log('token add...');
                                console.log(jsonEvent.tokenInfo);
                                console.log('getting certificates for it...');
                                
                                // Testing getCertificates
                                window.plugins.rutoken.getCertificates(
                                    function(certificates) {
                                        var jsonCerts = JSON.parse(certificates);
                                        console.log(jsonCerts);
                                    },
                                    function(error) {
                                        console.log(error);
                                    }
                                );
                                
                            } else {
                                console.log('token remove...');
                                console.log(jsonEvent.tokenInfo);
                            }
                        },
                        function(error) {
                            console.log(error);
                        }
                    );
                    
                    // Testing getCertificates
                    console.log('test getCertificates');
                    window.plugins.rutoken.getCertificates(
                        function(certificates) {
                            var jsonCerts = JSON.parse(certificates);
                            console.log(jsonCerts);
                        },
                        function(error) {
                            console.log(error);
                        }
                    );
                    
                },
                function(error) {
                    console.log(error);
                }
            );
        
        },
        function(error) {
            console.log(error);
        }
    );
}
