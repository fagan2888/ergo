// https://www.metaculus.com/questions/3961/continuous-log-open-both-ends-for-testing/


true_loc = 5000
true_25th = 1000
true_75th = 25000

prediction_request = { "prediction": { "kind": "multi", "d": [{ "kind": "logistic", "x0": 0.6182, "s": 0.115, "w": 0.5, "low": 0.01, "high": 0.975 }] }, "void": false }

submission = prediction_request.prediction.d[0]

submission_loc = submission.x0
submission_scale = submission.s

// https://www.metaculus.com/api2/questions/3961/
abridged_question_api_response = () => {

    return {
        "url": "https://www.metaculus.com/api2/questions/3961/",
        "page_url": "/questions/3961/continuous-log-open-both-ends-for-testing/",
        "id": 3961,
        "author": 112420,
        "title": "Continuous, log, open both ends (for testing)",
        "status": "V",
        "resolution": null,
        "created_time": "2020-03-29T03:16:44.918347Z",
        "publish_time": "2020-03-29T03:16:44.915063Z",
        "close_time": "2099-01-01T08:00:00Z",
        "resolve_time": "2099-01-01T08:00:00Z",
        "possibilities": {
            "low": "tail",
            "high": "tail",
            "type": "continuous",
            "scale": {
                "max": 1000000,
                "min": 1,
                "deriv_ratio": 1000000
            },
            "format": "num"
        },
        "can_use_powers": true,
        "last_activity_time": "2020-04-12T00:10:55.485072Z",
        "activity": 0.0000015104738655572104,
        "comment_count": 0,
        "votes": 0,
        "prediction_timeseries": [
            {
                "t": 1586649061.1743166,
                "distribution": {
                    "s": 10,
                    "x0": 0.57675,
                    "low": 0.01356,
                    "num": 1,
                    "high": 0.99,
                    "kind": "logistic"
                },
                "num_predictions": 101,
                "community_prediction": {
                    "q1": 0.14867,
                    "q2": 0.33813,
                    "q3": 0.85062,
                    "low": 0.01356,
                    "high": 0.99
                }
            },
            {
                "t": 1586650255.5488682,
                "distribution": {
                    "s": 0.115,
                    "x0": 0.6182,
                    "low": 0.01,
                    "num": 1,
                    "high": 0.975,
                    "kind": "logistic"
                },
                "num_predictions": 101,
                "community_prediction": {
                    "q1": 0.50006,
                    "q2": 0.61661,
                    "q3": 0.73211,
                    "low": 0.01,
                    "high": 0.975
                }
            }
        ],
        "user_vote": 0,
        "user_community_vis": 0,
        "my_predictions": {
            "id": 118150,
            "predictions": [
                {
                    "d": [
                        {
                            "s": 0.037034005,
                            "w": 0.5000871,
                            "x0": 0.15,
                            "low": 0.017118453445610027,
                            "high": 0.99,
                            "kind": "logistic"
                        },
                        {
                            "s": 0.032395907,
                            "w": 0.49991286,
                            "x0": 0.85,
                            "low": 0.01,
                            "high": 0.99,
                            "kind": "logistic"
                        }
                    ],
                    "t": 1586649060.9581203,
                    "kind": "multi"
                },
                {
                    "d": [
                        {
                            "s": 0.115,
                            "w": 0.5,
                            "x0": 0.6182,
                            "low": 0.01,
                            "high": 0.975,
                            "kind": "logistic"
                        }
                    ],
                    "t": 1586650255.4765742,
                    "kind": "multi"
                }
            ],
            "points_won": null,
            "user": 112420,
            "question": 3961,
            "active": true
        },
        "author_name": "oughttest",
        "prediction_histogram": [
            [
                0,
                0.0256955477656325,
                0.0256955477656325
            ],
            [
                0.005,
                0.0269455379561542,
                0.0269455379561542
            ],
            [
                0.01,
                0.0282559690506667,
                0.0282559690506667
            ],
            [
                0.015,
                0.0296297269587401,
                0.0296297269587401
            ],
            [
                0.02,
                0.0310698317254654,
                0.0310698317254654
            ],
            [
                0.025,
                0.0325794433981295,
                0.0325794433981295
            ],
            [
                0.03,
                0.0341618681119211,
                0.0341618681119211
            ],
            [
                0.035,
                0.0358205643988326,
                0.0358205643988326
            ],
            [
                0.04,
                0.0375591497235157,
                0.0375591497235157
            ],
            [
                0.045,
                0.0393814072493556,
                0.0393814072493556
            ],
            [
                0.05,
                0.0412912928374604,
                0.0412912928374604
            ],
            [
                0.055,
                0.0432929422805937,
                0.0432929422805937
            ],
            [
                0.06,
                0.0453906787733102,
                0.0453906787733102
            ],
            [
                0.065,
                0.0475890206186721,
                0.0475890206186721
            ],
            [
                0.07,
                0.0498926891709122,
                0.0498926891709122
            ],
            [
                0.075,
                0.0523066170122654,
                0.0523066170122654
            ],
            [
                0.08,
                0.054835956360886,
                0.054835956360886
            ],
            [
                0.085,
                0.0574860877053058,
                0.0574860877053058
            ],
            [
                0.09,
                0.0602626286592335,
                0.0602626286592335
            ],
            [
                0.095,
                0.0631714430286503,
                0.0631714430286503
            ],
            [
                0.1,
                0.0662186500810831,
                0.0662186500810831
            ],
            [
                0.105,
                0.0694106340046357,
                0.0694106340046357
            ],
            [
                0.11,
                0.0727540535417893,
                0.0727540535417893
            ],
            [
                0.115,
                0.0762558517801391,
                0.0762558517801391
            ],
            [
                0.12,
                0.0799232660790832,
                0.0799232660790832
            ],
            [
                0.125,
                0.0837638381079995,
                0.0837638381079995
            ],
            [
                0.13,
                0.0877854239676107,
                0.0877854239676107
            ],
            [
                0.135,
                0.0919962043620186,
                0.0919962043620186
            ],
            [
                0.14,
                0.0964046947842597,
                0.0964046947842597
            ],
            [
                0.145,
                0.10101975567316,
                0.10101975567316
            ],
            [
                0.15,
                0.105850602493725,
                0.105850602493725
            ],
            [
                0.155,
                0.11090681568725,
                0.11090681568725
            ],
            [
                0.16,
                0.116198350430759,
                0.116198350430759
            ],
            [
                0.165,
                0.121735546138212,
                0.121735546138212
            ],
            [
                0.17,
                0.127529135628203,
                0.127529135628203
            ],
            [
                0.175,
                0.133590253874432,
                0.133590253874432
            ],
            [
                0.18,
                0.139930446246245,
                0.139930446246245
            ],
            [
                0.185,
                0.146561676136763,
                0.146561676136763
            ],
            [
                0.19,
                0.153496331865665,
                0.153496331865665
            ],
            [
                0.195,
                0.160747232732505,
                0.160747232732505
            ],
            [
                0.2,
                0.16832763408447,
                0.16832763408447
            ],
            [
                0.205,
                0.176251231249769,
                0.176251231249769
            ],
            [
                0.21,
                0.184532162174294,
                0.184532162174294
            ],
            [
                0.215,
                0.19318500858495,
                0.19318500858495
            ],
            [
                0.22,
                0.202224795487924,
                0.202224795487924
            ],
            [
                0.225,
                0.211666988794415,
                0.211666988794415
            ],
            [
                0.23,
                0.221527490849785,
                0.221527490849785
            ],
            [
                0.235,
                0.231822633624936,
                0.231822633624936
            ],
            [
                0.24,
                0.242569169310981,
                0.242569169310981
            ],
            [
                0.245,
                0.25378425803999,
                0.25378425803999
            ],
            [
                0.25,
                0.26548545243606,
                0.26548545243606
            ],
            [
                0.255,
                0.277690678682063,
                0.277690678682063
            ],
            [
                0.26,
                0.29041821376862,
                0.29041821376862
            ],
            [
                0.265,
                0.303686658573167,
                0.303686658573167
            ],
            [
                0.27,
                0.31751490639873,
                0.31751490639873
            ],
            [
                0.275,
                0.331922106584563,
                0.331922106584563
            ],
            [
                0.28,
                0.346927622784402,
                0.346927622784402
            ],
            [
                0.285,
                0.362550985493217,
                0.362550985493217
            ],
            [
                0.29,
                0.378811838390407,
                0.378811838390407
            ],
            [
                0.295,
                0.395729878056977,
                0.395729878056977
            ],
            [
                0.3,
                0.413324786616897,
                0.413324786616897
            ],
            [
                0.305,
                0.431616156849213,
                0.431616156849213
            ],
            [
                0.31,
                0.450623409318405,
                0.450623409318405
            ],
            [
                0.315,
                0.470365701076579,
                0.470365701076579
            ],
            [
                0.32,
                0.490861825503409,
                0.490861825503409
            ],
            [
                0.325,
                0.512130102869093,
                0.512130102869093
            ],
            [
                0.33,
                0.534188261233084,
                0.534188261233084
            ],
            [
                0.335,
                0.557053307327924,
                0.557053307327924
            ],
            [
                0.34,
                0.580741387124462,
                0.580741387124462
            ],
            [
                0.345,
                0.605267635832971,
                0.605267635832971
            ],
            [
                0.35,
                0.630646017165581,
                0.630646017165581
            ],
            [
                0.355,
                0.656889151770024,
                0.656889151770024
            ],
            [
                0.36,
                0.684008134844152,
                0.684008134844152
            ],
            [
                0.365,
                0.712012343056017,
                0.712012343056017
            ],
            [
                0.37,
                0.740909231026579,
                0.740909231026579
            ],
            [
                0.375,
                0.77070411778196,
                0.77070411778196
            ],
            [
                0.38,
                0.801399963750364,
                0.801399963750364
            ],
            [
                0.385,
                0.832997139065619,
                0.832997139065619
            ],
            [
                0.39,
                0.86549318414473,
                0.86549318414473
            ],
            [
                0.395,
                0.898882563730687,
                0.898882563730687
            ],
            [
                0.4,
                0.933156415833016,
                0.933156415833016
            ],
            [
                0.405,
                0.968302297256038,
                0.968302297256038
            ],
            [
                0.41,
                1.00430392767647,
                1.00430392767647
            ],
            [
                0.415,
                1.0411409345152,
                1.0411409345152
            ],
            [
                0.42,
                1.07878860113959,
                1.07878860113959
            ],
            [
                0.425,
                1.11721762122791,
                1.11721762122791
            ],
            [
                0.43,
                1.15639386242222,
                1.15639386242222
            ],
            [
                0.435,
                1.19627814268315,
                1.19627814268315
            ],
            [
                0.44,
                1.23682602303411,
                1.23682602303411
            ],
            [
                0.445,
                1.27798762063435,
                1.27798762063435
            ],
            [
                0.45,
                1.31970744634316,
                1.31970744634316
            ],
            [
                0.455,
                1.36192427112043,
                1.36192427112043
            ],
            [
                0.46,
                1.40457102574351,
                1.40457102574351
            ],
            [
                0.465,
                1.44757473839569,
                1.44757473839569
            ],
            [
                0.47,
                1.49085651468799,
                1.49085651468799
            ],
            [
                0.475,
                1.5343315646024,
                1.5343315646024
            ],
            [
                0.48,
                1.57790928068279,
                1.57790928068279
            ],
            [
                0.485,
                1.62149337153898,
                1.62149337153898
            ],
            [
                0.49,
                1.66498205436394,
                1.66498205436394
            ],
            [
                0.495,
                1.70826830968692,
                1.70826830968692
            ],
            [
                0.5,
                1.75124020099314,
                1.75124020099314
            ],
            [
                0.505,
                1.7937812611327,
                1.7937812611327
            ],
            [
                0.51,
                1.83577094661963,
                1.83577094661963
            ],
            [
                0.515,
                1.87708515999154,
                1.87708515999154
            ],
            [
                0.52,
                1.9175968393712,
                1.9175968393712
            ],
            [
                0.525,
                1.95717661325638,
                1.95717661325638
            ],
            [
                0.53,
                1.99569351738058,
                1.99569351738058
            ],
            [
                0.535,
                2.03301576925669,
                2.03301576925669
            ],
            [
                0.54,
                2.06901159476273,
                2.06901159476273
            ],
            [
                0.545,
                2.10355009988186,
                2.10355009988186
            ],
            [
                0.55,
                2.13650217949972,
                2.13650217949972
            ],
            [
                0.555,
                2.16774145402258,
                2.16774145402258
            ],
            [
                0.56,
                2.19714522354481,
                2.19714522354481
            ],
            [
                0.565,
                2.22459542839701,
                2.22459542839701
            ],
            [
                0.57,
                2.24997960417967,
                2.24997960417967
            ],
            [
                0.575,
                2.27319181886057,
                2.27319181886057
            ],
            [
                0.58,
                2.29413357921458,
                2.29413357921458
            ],
            [
                0.585,
                2.31271469383124,
                2.31271469383124
            ],
            [
                0.59,
                2.32885408012473,
                2.32885408012473
            ],
            [
                0.595,
                2.34248050325894,
                2.34248050325894
            ],
            [
                0.6,
                2.35353323564759,
                2.35353323564759
            ],
            [
                0.605,
                2.36196262669696,
                2.36196262669696
            ],
            [
                0.61,
                2.36773057371012,
                2.36773057371012
            ],
            [
                0.615,
                2.37081088634129,
                2.37081088634129
            ],
            [
                0.62,
                2.37118953864589,
                2.37118953864589
            ],
            [
                0.625,
                2.36886480457586,
                2.36886480457586
            ],
            [
                0.63,
                2.36384727467849,
                2.36384727467849
            ],
            [
                0.635,
                2.35615975372205,
                2.35615975372205
            ],
            [
                0.64,
                2.34583704094328,
                2.34583704094328
            ],
            [
                0.645,
                2.33292559654117,
                2.33292559654117
            ],
            [
                0.65,
                2.31748309987965,
                2.31748309987965
            ],
            [
                0.655,
                2.29957790656361,
                2.29957790656361
            ],
            [
                0.66,
                2.27928841307889,
                2.27928841307889
            ],
            [
                0.665,
                2.25670233900172,
                2.25670233900172
            ],
            [
                0.67,
                2.23191593786131,
                2.23191593786131
            ],
            [
                0.675,
                2.2050331485606,
                2.2050331485606
            ],
            [
                0.68,
                2.17616469981385,
                2.17616469981385
            ],
            [
                0.685,
                2.14542718034403,
                2.14542718034403
            ],
            [
                0.69,
                2.11294208760194,
                2.11294208760194
            ],
            [
                0.695,
                2.07883486753654,
                2.07883486753654
            ],
            [
                0.7,
                2.04323395748039,
                2.04323395748039
            ],
            [
                0.705,
                2.00626984354092,
                2.00626984354092
            ],
            [
                0.71,
                1.96807414303551,
                1.96807414303551
            ],
            [
                0.715,
                1.92877872150865,
                1.92877872150865
            ],
            [
                0.72,
                1.88851485275574,
                1.88851485275574
            ],
            [
                0.725,
                1.84741242908508,
                1.84741242908508
            ],
            [
                0.73,
                1.80559922780988,
                1.80559922780988
            ],
            [
                0.735,
                1.76320023870809,
                1.76320023870809
            ],
            [
                0.74,
                1.72033705594815,
                1.72033705594815
            ],
            [
                0.745,
                1.6771273367797,
                1.6771273367797
            ],
            [
                0.75,
                1.63368432815228,
                1.63368432815228
            ],
            [
                0.755,
                1.59011646137006,
                1.59011646137006
            ],
            [
                0.76,
                1.54652701393167,
                1.54652701393167
            ],
            [
                0.765,
                1.50301383685135,
                1.50301383685135
            ],
            [
                0.77,
                1.45966914501717,
                1.45966914501717
            ],
            [
                0.775,
                1.41657936751784,
                1.41657936751784
            ],
            [
                0.78,
                1.37382505436023,
                1.37382505436023
            ],
            [
                0.785,
                1.33148083560347,
                1.33148083560347
            ],
            [
                0.79,
                1.28961542864637,
                1.28961542864637
            ],
            [
                0.795,
                1.24829168921582,
                1.24829168921582
            ],
            [
                0.8,
                1.20756670150669,
                1.20756670150669
            ],
            [
                0.805,
                1.16749190290866,
                1.16749190290866
            ],
            [
                0.81,
                1.1281132388127,
                1.1281132388127
            ],
            [
                0.815,
                1.08947134310865,
                1.08947134310865
            ],
            [
                0.82,
                1.05160174015627,
                1.05160174015627
            ],
            [
                0.825,
                1.01453506422443,
                1.01453506422443
            ],
            [
                0.83,
                0.978297292637842,
                0.978297292637842
            ],
            [
                0.835,
                0.942909989139558,
                0.942909989139558
            ],
            [
                0.84,
                0.908390554261414,
                0.908390554261414
            ],
            [
                0.845,
                0.874752479788048,
                0.874752479788048
            ],
            [
                0.85,
                0.842005604695626,
                0.842005604695626
            ],
            [
                0.855,
                0.810156370239485,
                0.810156370239485
            ],
            [
                0.86,
                0.779208072150815,
                0.779208072150815
            ],
            [
                0.865,
                0.749161108177673,
                0.749161108177673
            ],
            [
                0.87,
                0.720013219467286,
                0.720013219467286
            ],
            [
                0.875,
                0.691759724532603,
                0.691759724532603
            ],
            [
                0.88,
                0.664393744774811,
                0.664393744774811
            ],
            [
                0.885,
                0.637906420744235,
                0.637906420744235
            ],
            [
                0.89,
                0.612287118514075,
                0.612287118514075
            ],
            [
                0.895,
                0.587523625714805,
                0.587523625714805
            ],
            [
                0.9,
                0.563602336932049,
                0.563602336932049
            ],
            [
                0.905,
                0.540508428307831,
                0.540508428307831
            ],
            [
                0.91,
                0.518226021305098,
                0.518226021305098
            ],
            [
                0.915,
                0.496738335699205,
                0.496738335699205
            ],
            [
                0.92,
                0.476027831948715,
                0.476027831948715
            ],
            [
                0.925,
                0.456076343172439,
                0.456076343172439
            ],
            [
                0.93,
                0.436865197021354,
                0.436865197021354
            ],
            [
                0.935,
                0.418375327783986,
                0.418375327783986
            ],
            [
                0.94,
                0.400587379103249,
                0.400587379103249
            ],
            [
                0.945,
                0.383481797712612,
                0.383481797712612
            ],
            [
                0.95,
                0.367038918621044,
                0.367038918621044
            ],
            [
                0.955,
                0.351239042190338,
                0.351239042190338
            ],
            [
                0.96,
                0.336062503556183,
                0.336062503556183
            ],
            [
                0.965,
                0.32148973484665,
                0.32148973484665
            ],
            [
                0.97,
                0.307501320649299,
                0.307501320649299
            ],
            [
                0.975,
                0.294078047171778,
                0.294078047171778
            ],
            [
                0.98,
                0.281200945531141,
                0.281200945531141
            ],
            [
                0.985,
                0.268851329594863,
                0.268851329594863
            ],
            [
                0.99,
                0.257010828782115,
                0.257010828782115
            ],
            [
                0.995,
                0.245661416217881,
                0.245661416217881
            ],
            [
                1,
                0.234785432615267,
                0.234785432615267
            ]
        ],
        "anon_prediction_count": 0,
        "last_read": "2020-04-12T00:07:38.976533Z"
    }
}