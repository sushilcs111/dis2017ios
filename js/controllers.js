angular.module('disApp.controllers', [])
    .controller('AppCtrl', function($scope, $ionicModal, $http, $ionicLoading, $ionicHistory, $timeout, $rootScope, $state, $filter) {
        $rootScope.fromid = localStorage.getItem("userId");
        $rootScope.loginuserv = JSON.parse(localStorage.getItem("loginuser"));
        $rootScope.apptitle = localStorage.getItem("apptitle");
        if ($rootScope.apptitle == 'undefined') {
            $rootScope.apptitle = 'DIS 2017';
        }

        $rootScope.checkuserlogin = function(ab) {
            console.log($rootScope.fromid);
            if (!$rootScope.fromid) {
                $state.go('app.login');
            } else {
                $state.go('app.' + ab);
            }
        }


        $scope.gotourl = function(url) {
            $timeout(function() {
                $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
                $state.go('app.' + url, {}, { reload: true });
            }, 30);
        }

    $scope.clicktocall = function(cno) {
        var confirmPopup = $ionicPopup.confirm({
            title: cno,
            template: 'Are you sure you want to Call ?'
        });

        confirmPopup.then(function(res) {
            if (res) {
                window.location.href = 'tel:' + cno;
            } else {
                console.log('You are not sure');
            }
        });
    };

        $scope.goturlwithpara = function(pg, param) {
            var p = parseInt(param);
            if (!$rootScope.fromid) {
                $state.go('app.login');
            } else {
                $state.go('app.' + pg, { id: p });
            }
        }




        $scope.$on('$ionicView.enter', function(e) {
            // Chatlist
            $scope.fromid = localStorage.getItem("userId");
            $ionicLoading.show({ template: 'Loading...' });
            $http.get(domain + '/api/?method=getUsers&userId=' + $scope.fromid)
                .then(function(response) {
                    $ionicLoading.hide();
                    $scope.userdata = response.data.usersdata;
                    $scope.counth = response.data;
                    console.log(response.data);
                })
        })


    })


.controller('homeCtrl', function($scope, $rootScope, $state, $ionicNavBarDelegate, $ionicLoading, $http) {
        $scope.$on('$ionicView.enter', function(e) {
            $ionicNavBarDelegate.showBar(true);
            $rootScope.loginuserv = JSON.parse(localStorage.getItem("loginuser"));
        });

$scope.slogos='http://dis.cruxservers.in/wp-content/uploads/2017/03/logos-strip.png';
        $ionicLoading.show({ template: 'Loading...' });
        $http.get(domain + '/api/?method=getPage&id=220&userId=' + $scope.fromid)
            .success(function(response) {
                $ionicLoading.hide();
                console.log(response);
                $scope.homecontent = response;
                localStorage.setItem('apptitle', response.page_data.ctitle);

            })




    })
    .controller('sessionsCtrl', function($scope, $http, $ionicLoading) {

        $http.get(domain + '/api/?method=getPage&id=405&cat_id=2&userId=' + $scope.fromid)
            .success(function(response) {
                $ionicLoading.hide();
                $scope.responsesession = response;
                $scope.pagehead = response.page_data.title;
                $scope.topheader = response.page_data.heading_title;
                console.log(response)
                $scope.sdata = response.menupage;

                $scope.activebtn = $scope.sdata[0].post_title;
            })


        $scope.onClickTab = function(tab) {
            $scope.activebtn = tab;

        }
        $scope.isActiveTab = function(stabUrl) {
            return stabUrl == $scope.activebtn;
        }
    })


.controller('speakersCtrl', function($scope, $http, $ionicLoading) {

    $http.get(domain + '/api/?method=getPage&id=414&cat_id=4&userId=' + $scope.fromid)
        .success(function(response) {
            $ionicLoading.hide();
            $scope.responsespeakers = response;
            $scope.pagehead = response.page_data.title;
            $scope.topheader = response.page_data.heading_title;
            console.log(response)
            $scope.sdata = response.menupage;

            $scope.activebtn = $scope.sdata[0].post_title;
        })


    $scope.onClickTab = function(tab) {
        $scope.activebtn = tab;

    }
    $scope.isActiveTab = function(stabUrl) {
        return stabUrl == $scope.activebtn;
    }

})



.controller('speakPaymentCtrl', function($scope, $rootScope, $ionicLoading, $http) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=123&userId=' + $scope.fromid)
        .success(function(response) {
            $ionicLoading.hide();
            $scope.speakpayment = response.content;
            $rootScope.htitle = response.ctitle;

        })
})


.controller('speakHdsCtrl', function($scope, $ionicLoading, $http) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=135&userId=' + $scope.fromid)
        .success(function(response) {
            $ionicLoading.hide();
            // $scope.triviaRailway=response.content;
            // console.log(response);
            $scope.speakhds = response.content;
        })
})


.controller('speakMicroCtrl', function($scope, $ionicLoading, $http) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=144&userId=' + $scope.fromid)
        .success(function(response) {
            $ionicLoading.hide();
            // $scope.triviaRailway=response.content;
            //console.log(response);
            $scope.speakmicroit = response.content;
        })
})

.controller('speakRailCtrl', function($scope, $ionicLoading, $http) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=146&userId=' + $scope.fromid)
        .success(function(response) {
            $ionicLoading.hide();
            // $scope.triviaRailway=response.content;
            // console.log(response);
            $scope.speakrailway = response.content;
        })
})




.controller('sessionRailCtrl', function($scope, $ionicLoading, $http) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=196&userId=' + $scope.fromid)
        .success(function(response) {
            $ionicLoading.hide();
            // $scope.triviaRailway=response.content;
            // console.log(response);
            $scope.sessionrailway = response.content;
        })
})

.controller('sessionPaymentCtrl', function($scope, $ionicLoading, $http) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=199&userId=' + $scope.fromid)
        .success(function(response) {
            $ionicLoading.hide();
            $scope.sessionpayment = response.content;
        })
})


.controller('sessionItCtrl', function($scope, $ionicLoading, $http) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=201&userId=' + $scope.fromid)
        .success(function(response) {
            $ionicLoading.hide();
            $scope.sessionIt = response.content;
        })
})


.controller('sessionDataCtrl', function($scope, $rootScope, $ionicLoading, $http) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=405&cat_id=2')
        .success(function(response) {
            $ionicLoading.hide();
            $scope.sessionHdata = response.page_data.content;
            console.log(response)
            $rootScope.htitle = response.ctitle;
        })






})








.controller('partnersCtrl', ['$scope', '$ionicLoading', '$http', function($scope, $ionicLoading, $http) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=816')
        .success(function(response) {
            $ionicLoading.hide();
            $scope.partners = response;
            console.log(response)
        })
}])


.controller('ideasforchangeCtrl', ['$scope','$window', '$ionicLoading', '$http', '$ionicModal', function($scope, $window, $ionicLoading, $http, $ionicModal) {
    $scope.uinfo = angular.fromJson(localStorage.getItem('loginuser'));


    $scope.getideas = function() {
        $ionicLoading.show();
        $http.get(domain + '/api/?method=getideas')
            .success(function(response) {
                $ionicLoading.hide();
           console.log(response);
           $scope.postideas=response;
            })
    }

    $scope.$on('$ionicView.enter', function(e) {
    $scope.getideas();
    });




    $ionicModal.fromTemplateUrl('shareideasform', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.submitidea = function(idata) {
        $ionicLoading.show({ template: 'Loading...' });
        $http.get(domain + '/api/?method=saveIdeas&userId=' + $scope.uinfo.ID + '&msg=' + idata.ideatext)
            .success(function(response) {
                $ionicLoading.hide();
                console.log(response)
            })
        $scope.modal.hide();
      $window.location.reload(true)
    };



}])



.controller('agendaCtrl', ['$scope', '$ionicLoading', '$http', function($scope, $ionicLoading, $http) {


    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=189&userId=' + $scope.fromid)
        .success(function(response) {
            $ionicLoading.hide();
            // $scope.triviaRailway=response.content;
            console.log(response);
            $scope.agendacontent = response;
        })
}])

.controller('openingpollCtrl', function($scope, $http, $ionicLoading, $state, $ionicNavBarDelegate) {
    $scope.hptitle='DIS 2017';
    $scope.$on('$ionicView.enter', function(e) {
        $ionicNavBarDelegate.showBar(true);

        jQuery('.triviatexr .row .col:nth-child(2) span').unwrap();
        jQuery('.triviatexr .row .col:nth-child(2)').addClass('marquee');

    });

    $scope.uinfo = angular.fromJson(localStorage.getItem('loginuser'));
    //console.log($scope.uinfo);
    $scope.fdata = {
        "session": '',
        "email": $scope.uinfo.user_login,
        "nickname": $scope.uinfo.user_nicename,
        "rate": '',
        "comment": ''
    }


    $scope.sessionfeedback = function(data) {
        console.log(data);
        $scope.succmsg = '';
        if ($scope.fdata.rate == 0) {
            $scope.rerror = 'Please rate the session';
            return false;
        } else { $scope.rerror = ''; }

        $ionicLoading.show({ template: 'Loading...' });
        $http.get(domain + '/api/?method=saveRating&session=' + data.session + '&email=' + data.email + '&nickname=' + data.nickname + '&rate=' + data.rate + '&comment=' + data.comment)
            .then(function(response) {
                jQuery('#feedbackform').css('display', 'none');
                $scope.succmsg = 'Thank for your valuable feedback';
                $ionicLoading.hide();
                $scope.fdata = {}
                    //console.log(response);
            })
    }
    $scope.ratingsObject = {
        iconOn: 'ion-ios-star', //Optional
        iconOff: 'ion-ios-star-outline', //Optional
        iconOnColor: 'rgb(255, 1, 38)', //Optional
        iconOffColor: 'rgb(200, 100, 100)', //Optional
        rating: 0, //Optional
        minRating: 0, //Optional
        readOnly: false, //Optional
        callback: function(rating, index) { //Mandatory    
            $scope.ratingsCallback(rating, index);
        }
    };
    $scope.ratingsCallback = function(rating, index) {
        //console.log('Selected rating is : ', rating, ' and index is ', index);
        $scope.fdata.rate = rating;
    };
    $scope.reloadresult = function() {
        $state.go($state.current, {}, { reload: true });
    }
    $scope.pollstatus = "";
    $http.get(domain + '/api/?method=getPage&id=68')
        .success(function(response) {
            // console.log(response);

            // console.log($scope.ftsession);
            $scope.pollstatus = response.page_data.status
            if ($scope.pollstatus == 'true') {
                $scope.fstatus = false;
                $scope.pollstatic = false;
                $scope.polld = {};
                $http.get(domain + '/api/?method=getPolls&userId=' + $scope.fromid)
                    .success(function(response) {
                        $scope.polld = response;
                        //console.log(response);
                        if ($scope.polld.length <= 1) {
                            $http.get(domain + '/api/?method=getPage&id=312').success(function(response) {
                                // console.log(response);
                                $scope.fdata.session = response.page_data.session_pname;
                                $scope.datafeedbak = response.page_data;
                                if (response.page_data.status == 'true') {
                                    $http.get(domain + '/api/?method=checkRating&session_name=' + $scope.fdata.session + '&' + 'email=' + $scope.uinfo.user_login)
                                        .then(function(response) {
                                            $scope.ckfeedrating = response.data;
                                            if ($scope.ckfeedrating == 'valid') {
                                                $scope.fstatus = true;
                                            } else {
                                                $scope.fstatus = false;
                                            }
                                        })
                                } else {
                                    $scope.fstatus = false;
                                }

                            })
                        }
                    })







            } else {
                $scope.pollstatic = true;
                $scope.pollstaticContent = response;
                // console.log(response);
            }
        })







    $scope.ans = {};
    var pollurl = new Array();
    $scope.plarray = [];

    $scope.pollsubmit = function(ansId, qtId) {
        console.log(ansId)
        if (!ansId) {
            $('#err_' + qtId).text('Please select an answer')
            return false;
        }


        $scope.pollurl = $scope.plarray.join('&');
        $ionicLoading.show({ template: 'Loading...' });
        $http({
            method: 'GET',
            url: domain + '/api/?method=vote&pollid[' + qtId + ']=' + ansId + '&userId=' + $scope.fromid
        }).then(function successCallback(response) {
            $ionicLoading.hide();

            $('#err_' + qtId).empty()

            $scope.getpolldata = response.data;

            $.each($scope.getpolldata, function(k, v) {
                $.each(v, function(g, y) {
                    $('#per_' + k + '_' + y.id).text(y.per);
                    $('#per_' + k + '_' + y.id).addClass('pollscore');
                    // $('#qn_'+k).replaceWith('<div class="successmsg" ng-click="reloadresult()">Thank you. Your vote submitted successfully</div>');
                    $('#qn_' + k).css('display', 'none');
                    $('#psub_' + k).css('display', 'block');

                    $('#qnp_' + k).append(' <div class="overlay"> </div>');

                    console.log('#qn_' + k);

                });
            });
            console.log($scope.getpolldata)
        }, function errorCallback(response) {
            $ionicLoading.hide();
            $scope.result = 'Please try agail';
        });


    }


})


.controller('timesnetworkCtrl', ['$scope', '$ionicLoading', '$http', function($scope, $ionicLoading, $http) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=208&userId=' + $scope.fromid)
        .success(function(response) {
            $ionicLoading.hide();
            // $scope.triviaRailway=response.content;
            //console.log(response);
            $scope.timesnetworktext = response;
        })
}])




.controller('triviaCtrl', function($scope, $http, $ionicLoading) {
    $http.get(domain + '/api/?method=getPage&id=433&cat_id=5&userId=' + $scope.fromid)
        .success(function(response) {
            $ionicLoading.hide();
            $scope.responsetriva = response;
            $scope.pagehead = response.page_data.title;
            $scope.topheader = response.page_data.heading_title;
            console.log(response)
            $scope.sdata = response.menupage;
            $scope.activebtn = $scope.sdata[0].post_title;
        })


    $scope.onClickTab = function(tab) {
        $scope.activebtn = tab;

    }
    $scope.isActiveTab = function(stabUrl) {
        return stabUrl == $scope.activebtn;
    }

    // $scope.tabs = [{
    //     stitle: 'Data Solutions',
    //     url: 'trivia-datasolution.html'
    // }, {
    //     stitle: 'Payment',
    //     url: 'trivia-payment.html'
    // }, {
    //     stitle: 'Railway',
    //     url: 'trivia-railway.html'
    // }, {
    //     stitle: 'IT Solutions',
    //     url: 'trivia-itsolution.html'
    // }];

    // $scope.currentTab = 'trivia-datasolution.html';
    // $scope.onClickTab = function(tab) {
    //     $scope.currentTab = tab.url;
    // }
    // $scope.isActiveTab = function(tabUrl) {
    //     return tabUrl == $scope.currentTab;
    // }

})


.controller('triviaDatasolutionCtrl', function($scope, $rootScope, $http, $ionicLoading) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=58')
        .success(function(response) {
            $ionicLoading.hide();
            // $scope.triviaRailway=response.content;
            //console.log(response);
            $scope.triviadatasolution = response.content;
            $rootScope.htitle = response.ctitle;
        })
})


.controller('triviaRailwayCtrl', function($scope, $http, $ionicLoading) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=23')
        .success(function(response) {
            $ionicLoading.hide();
            // $scope.triviaRailway=response.content;
            // console.log(response);
            $scope.triviaRailway = response.content;
        })
})






.controller('triviaItsolutionCtrl', function($scope, $http, $ionicLoading, $timeout) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=33')
        .success(function(response) {
            $ionicLoading.hide();
            // $scope.triviaRailway=response.content;
            //console.log(response);
            $scope.triviIt = response.content;
            $timeout(function() {
                appbrowserlink();
            }, 1000);
        })
})

.controller('triviaPaymentCtrl', function($scope, $http, $ionicLoading, $timeout) {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=37')
        .success(function(response) {
            $ionicLoading.hide();
            // $scope.triviaRailway=response.content;
            //console.log(response.content);
            $scope.triviaPayment = response.content;
            $timeout(function() {
                appbrowserlink();
            }, 1000);
        })
})



.controller('triviaLatestCtrl', function($scope, $ionicLoading, $http, $timeout) {
    $ionicLoading.show({ template: 'Loading...' });

    $http.get(domain + '/api/?method=latestInfo')
        .success(function(response) {
            // console.log(response);
            $ionicLoading.hide();
            $scope.triviItlatest = response;
            console.log(response);
            $timeout(function() {
                appbrowserlink();
            }, 1000);

        })



})




.controller('loginmodalCtrl', ['$scope', '$http', '$ionicModal', function($scope, $http, $ionicModal) {
    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/signin.html', function($ionicModal) {
        $scope.modal = $ionicModal;
    });




}])


.controller('loginCtrl', function($scope, $rootScope, $state, $http, $window, $ionicHistory, $ionicLoading) {

    console.log($rootScope.plyerid);
    console.log($scope.plyerid);

    $scope.mclosemodal = function() {
        $scope.modal.hide();

    }

    console.log($scope.fromid);
    if ($scope.fromid) {
        $state.go('app.home', {}, { reload: true });
        // $ionicHistory.clearCache();
        //$window.location.reload(true);
    }

    $scope.lg = {
        "username": '',
        "password": '',
        "device_id": $rootScope.plyerid
    }

    $scope.loginaction = function(lg) {
        $ionicLoading.show({ template: 'Loading...' });
        $http({
            method: 'POST',
            url: domain + '/api/?method=checkLogin&useremail=' + lg.username + '&password=' + lg.password + '&device_id=' + $rootScope.plyerid
        }).then(function(response) {
            $ionicLoading.hide();
            console.log(response);
            if (response != false) {
                $scope.ldata = response.data.usersdata.data;
                console.log($scope.ldata);
                localStorage.setItem('userId', $scope.ldata.ID);
                localStorage.setItem('loginuser', angular.toJson($scope.ldata));
                //$ionicHistory.clearCache()
                // 
                $state.go('app.home', {}, { reload: true });
                // $scope.$apply();
                // $window.location.reload(true);

            } else {
                $ionicLoading.hide();
                $scope.loginerror = true;
            }
        }, function errorCallback(response) {
            $ionicLoading.hide();
            $scope.loginerror = true;
        })
    }

    $scope.gotopage = function() {
        $scope.modal.hide();
        $ionicHistory.nextViewOptions({ disableBack: true });
        $state.go('app.register');
    }





})

.controller('logoutctrl', function($scope, $state, $window) {

    $scope.logout = function() {
        localStorage.clear();
        // $window.location.reload(true);
        $state.go('app.home', {}, { reload: true });
        console.log('signout');
    }
})

.controller('registerCtrl', function($scope, $http, $state, $window, $ionicLoading) {
    $scope.reg = {};
    $scope.submitform = function(reg) {
        var data = reg;
        console.log(reg);
        $ionicLoading.show({ template: 'Loading...' });
        $http({
            method: 'POST',
            url: domain + '/api/?method=registerUser&firstname=' + data.firstname + '&companyname=' + data.companyname + '&designation=' + data.designation + '&useremail=' + data.useremail + '&phone=' + data.phone + '&password=' + data.password

        }).then(function(response) {
            $ionicLoading.hide();
            if (response.data.data != false) {
                localStorage.setItem('userId', response.data.id);
                localStorage.setItem('loginuser', angular.toJson(reg));
                // $window.location.reload(true);
                $state.go('app.home', {}, { reload: true });
            } else {
                $scope.rerror = 'Sorry, that username already exists!';
            }

        })
    }
})

.controller('chatlistCtrl', function($scope, $http, $state, $ionicLoading) {
    $scope.gotoCpage = function(urid) {
        var ab = parseInt(urid);
        $http({
            method: 'POST',
            url: domain + '/api/?method=updateReadMsges&from=' + urid + '&userId=' + $scope.fromid
        }).then(function(response) {
            $state.go('app.chat', { id: ab });
        })

    }



    $scope.chattabs = [{
        stitle: 'Users',
        url: 'cuser'
    }, {
        stitle: 'Speakers',
        url: 'speakaruser'
    }];


    if (localStorage.getItem("ctab") == 'speakaruser') {
        // console.log('speakar')
        $scope.chatcurrentTab = 'speakaruser'
    } else {
        //  console.log('user')
        $scope.chatcurrentTab = 'cuser'
    }

    // $scope.chatcurrentTab = 'cuser.html';
    $scope.tabchange = function(tab) {
        $scope.usearch = '';
        $scope.chatcurrentTab = tab.url;
        localStorage.setItem('ctab', tab.url)
    }
    $scope.activetab = function(tabUrl) {
        return tabUrl == $scope.chatcurrentTab;
    }

})






.controller('queriesCtrl', function($scope, $http, $window, $ionicLoading, $state, $ionicHistory) {

    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=querytext')
        .success(function(response) {
            $ionicLoading.hide();
            $scope.qtext = response;
            console.log(response);
        })

    $scope.sendemail = function(qry) {
        $ionicLoading.show({ template: 'Loading...' });
        $http({
            method: 'POST',
            url: domain + '/api',
            params: {
                method: 'sendQuery',
                fullname: qry.fullname,
                useremail: qry.useremail,
                mobile: qry.mobile,
                query: qry.query
            }
        }).then(function(response) {
            $ionicLoading.hide();
            // console.log(response.data);
            $scope.mailresult = response.data;
            alert($scope.mailresult);
            // $ionicHistory.nextViewOptions({disableBack: true});
            // $state.go('app.home',{},{reload: true});
            $window.location.reload(true);
        })
    }

})

.controller('contactCtrl', ['$scope', '$ionicLoading', '$sce', '$http', function($scope, $ionicLoading, $sce, $http) {

    $ionicLoading.show({ template: 'Loading...' });
    $http.get(domain + '/api/?method=getPage&id=211&userId=' + $scope.fromid)
        .success(function(response) {
            $ionicLoading.hide();
            $scope.contactdata = response;
            $scope.lmap = $scope.trustSrc(response.page_data.location);
            console.log(response);
        })
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

}])




.controller('chatCtrl', function($scope, $http, $stateParams, $timeout, $window, $ionicScrollDelegate) {
    $scope.hideTime = true;
    $scope.toId = $stateParams.id;
    $scope.fromid = localStorage.getItem("userId");
    $scope.touname = localStorage.tuname;

    $scope.$on('$ionicView.enter', function(e) {
        $scope.getnmessage();
        //  $ionicScrollDelegate.scrollBottom(true);
    })




    var alternate,
        isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

    $scope.sendMessage = function() {
        //console.log($scope.device_id);
        if (!$scope.data.message) {
            return false;
        }


        alternate = !alternate;

        var d = new Date();
        d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

        $scope.messages.push({
            userId: $scope.toId,
            text: $scope.data.message,
            time: d
        });
        // console.log($scope.data.message);
        $http({
            method: 'POST',
            url: domain + '/api/?method=saveMsg&userId=' + $scope.fromid + '&to=' + $scope.toId + '&msg=' + $scope.data.message

        }).then(function(response) {
            // console.log(response)
        })


        delete $scope.data.message;
        //  $ionicScrollDelegate.scrollBottom(true);

    };


    $scope.inputUp = function() {
        if (isIOS) $scope.data.keyboardHeight = 216;
        $timeout(function() {
            $ionicScrollDelegate.scrollBottom(true);
        }, 300);

    };

    $scope.inputDown = function() {
        if (isIOS) $scope.data.keyboardHeight = 0;
        $ionicScrollDelegate.resize();
    };

    $scope.closeKeyboard = function() {
        // cordova.plugins.Keyboard.close();
    };
    $scope.data = {};
    $scope.myId = $scope.fromid;
    $scope.messages = [];
    /*previous chat */
    $scope.getnmessage = function() {
        $http.get(domain + '/api/?method=getChatMsgs&from=' + $scope.fromid + '&to=' + $scope.toId)
            .then(function(response) {
                $scope.prchatdata = response.data;
                $ionicScrollDelegate.scrollBottom(true);
            })
    }
    $scope.doRefresh = function() {
        $window.location.reload(true)
        $ionicScrollDelegate.scrollBottom(true);
    }
    $http.get(domain + '/api/?method=getUser&id=' + $scope.toId)
        .success(function(response) {
            $scope.fuser = response.data;
        })
})

.controller('inractiveCtrl', function($scope, $http, $stateParams, $timeout, $window, $ionicScrollDelegate, $filter) {

    $http.get(domain + '/api/?method=gettopactive')
        .success(function(response) {
            $scope.topuser = response;
            console.log(response);
        })

})
