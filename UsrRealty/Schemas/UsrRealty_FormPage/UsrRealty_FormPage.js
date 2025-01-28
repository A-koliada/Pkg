define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "26cc8c09-51dc-46cf-98ca-82a08a24684a",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_e2qed1o",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_e2qed1o_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrProcess_GenerateVisits",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "ProcessSchemaParameter1"
						}
					},
					"clickMode": "default",
					"icon": "date-time"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ylu04u7_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "relationship-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceUSD_3s7mfia",
					"labelPosition": "auto",
					"control": "$PDS_UsrPriceUSD_3s7mfia"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_9nferdv",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_9nferdv"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommissionUSD_rjgvogf",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommissionUSD_rjgvogf",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TypeRealty",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrTypeRealty_h6atw6s",
					"labelPosition": "auto",
					"control": "$PDS_UsrTypeRealty_h6atw6s",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_8b2fvxx",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8b2fvxx_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "TypeRealty",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_61tz2ga",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_61tz2ga",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_l6f3dlg",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_l6f3dlg_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_89r5rgb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrComment_gc5xqab",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_gc5xqab"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(UsrCommissionOfferType_label)#",
					"control": "$PDS_UsrOfferTypeUsrCommission",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_13do3cs",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_13do3cs_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_5o3t4dq",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_13do3cs",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_kwzxzas",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_5o3t4dq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_w07aguq",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_w07aguq_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_kwzxzas",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_copxzos",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_copxzos_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_eqf1g7bDS"
						}
					}
				},
				"parentName": "FlexContainer_kwzxzas",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_asj2eu0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_asj2eu0_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_kwzxzas",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_zlqa2p2",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_zlqa2p2_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_eqf1g7b"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_asj2eu0",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_7ah6cpy",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_7ah6cpy_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_asj2eu0",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_l3jdipf",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_l3jdipf_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_l3jdipf_GridDetail_eqf1g7b",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_eqf1g7b"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_l3jdipf_SearchValue",
							"GridDetailSearchFilter_l3jdipf_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_kwzxzas",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_1155q91",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_13do3cs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_eqf1g7b",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 12
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_eqf1g7b",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_eqf1g7bDS_Id",
					"columns": [
						{
							"id": "1bb09cc7-5d56-dd43-2e54-daac14578bfa",
							"code": "GridDetail_eqf1g7bDS_UsrDateTime",
							"caption": "#ResourceString(GridDetail_eqf1g7bDS_UsrDateTime)#",
							"dataValueType": 7,
							"width": 143
						},
						{
							"id": "d1896939-960b-bfa2-8963-3d2ea66e0fc0",
							"code": "GridDetail_eqf1g7bDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_eqf1g7bDS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "749c1461-825b-b47c-2c2e-8f788e3579a1",
							"code": "GridDetail_eqf1g7bDS_UsrResponsible",
							"caption": "#ResourceString(GridDetail_eqf1g7bDS_UsrResponsible)#",
							"dataValueType": 10
						},
						{
							"id": "6f0fda9e-eeb5-5d2b-620f-bfa527ecdb53",
							"code": "GridDetail_eqf1g7bDS_UsrComment",
							"caption": "#ResourceString(GridDetail_eqf1g7bDS_UsrComment)#",
							"dataValueType": 29
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_1155q91",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPriceUSD_3s7mfia": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_9nferdv": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrColumn4_lejp9gq": {
						"modelConfig": {
							"path": "PDS.UsrColumn4"
						}
					},
					"PDS_UsrTypeRealty_h6atw6s": {
						"modelConfig": {
							"path": "PDS.UsrTypeRealty"
						}
					},
					"PDS_UsrOfferType_61tz2ga": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrCommissionUSD_rjgvogf": {
						"modelConfig": {
							"path": "PDS.UsrCommissionUSD"
						}
					},
					"PDS_UsrOfferTypeUsrCommission": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommission"
						}
					},
					"GridDetail_eqf1g7b": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_eqf1g7bDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_l3jdipf_GridDetail_eqf1g7b",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_eqf1g7bDS_UsrDateTime": {
									"modelConfig": {
										"path": "GridDetail_eqf1g7bDS.UsrDateTime"
									}
								},
								"GridDetail_eqf1g7bDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_eqf1g7bDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_eqf1g7bDS_UsrResponsible": {
									"modelConfig": {
										"path": "GridDetail_eqf1g7bDS.UsrResponsible"
									}
								},
								"GridDetail_eqf1g7bDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_eqf1g7bDS.UsrComment"
									}
								},
								"GridDetail_eqf1g7bDS_Id": {
									"modelConfig": {
										"path": "GridDetail_eqf1g7bDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrComment_gc5xqab": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required",
								"params": {
									"message": "#ResourceString(PriceOver)#"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_eqf1g7bDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommission": {
									"path": "UsrOfferType.UsrCommission",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_eqf1g7bDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrDateTime": {
									"path": "UsrDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrResponsible": {
									"path": "UsrResponsible"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          //s.Art
       {
        
          request: "crt.HandleViewModelAttributeChangeRequest",
         
         handler: async (request, next) => {
 
                if (request.attributeName === 'PDS_UsrPriceUSD_3s7mfia') {
                
                      const selectedPrice = await request.$context.PDS_UsrPriceUSD_3s7mfia;
 
                    if (selectedPrice>7000) {
                    
                            request.$context.enableAttributeValidator('PDS_UsrComment_gc5xqab', 'required');
                
                      } else {
                    
                            request.$context.disableAttributeValidator('PDS_UsrComment_gc5xqab', 'required');
                
                      }
            
                }
            
            return next?.handle(request);
        
          }
    
        },
            {
        
          request: "crt.HandleViewModelResumeRequest",
         
         handler: async (request, next) => {
                
                   const selectedPrice = await request.$context.PDS_UsrPriceUSD_3s7mfia;
 
                    if (selectedPrice>7000) {
                    
                            request.$context.enableAttributeValidator('PDS_UsrComment_gc5xqab', 'required');
                
                      } else {
                    
                            request.$context.disableAttributeValidator('PDS_UsrComment_gc5xqab', 'required');
                
                      }
                      
            return next?.handle(request);
        
          }
    
        },
          //e.art
        /*
        {
        
          request: "crt.HandleViewModelAttributeChangeRequest",
        
          handler: async (request, next) => {
            
                if (request.attributeName === 'PDS_UsrPriceUSD_3s7mfia') {
                
                      const comparedPrice = 7000;
                
                      const selectedPrice = await request.$context.PDS_UsrPriceUSD_3s7mfia;
                
                      const isSelectedPriceGraterThanCompared = selectedPrice > comparedPrice;
                
                      if (isSelectedPriceGraterThanCompared) {
                    
                            request.$context.enableAttributeValidator('PDS_UsrComment_gc5xqab', 'required');
                
                      } else {
                    
                            request.$context.disableAttributeValidator('PDS_UsrComment_gc5xqab', 'required');
                
                      }
            
                }
            
            return next?.handle(request);
        
          }
    
        },
          */
          /* del
          {
        
            request: "crt.HandleViewModelResumeRequest",
        
            handler: async (request, next) => {
                
              const comparedPrice = 7000;
                
              const selectedPrice = await request.$context.PDS_UsrPriceUSD_3s7mfia;
                
              const isSelectedPriceGraterThanCompared = selectedPrice > comparedPrice;
                
              if (isSelectedPriceGraterThanCompared) {
                    
                      request.$context.enableAttributeValidator('PDS_UsrComment_gc5xqab', 'required');
                
              } else {
                    
                      request.$context.disableAttributeValidator('PDS_UsrComment_gc5xqab', 'required');
                
              }
            
              return next?.handle(request);
        
            }
    
          },
          */
          //e.Art
          {
              				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPriceUSD_3s7mfia;
					console.log("Price = " + price);
					request.$context.PDS_UsrArea_9nferdv = price * 0.2;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
          },      
          {
                 request: "crt.HandleViewModelAttributeChangeRequest",   // The custom implementation of the system query handler
			     handler: async (request, next) => {
      					        if (request.attributeName === 'PDS_UsrPriceUSD_3s7mfia' || 				    // if price changed
					            request.attributeName === 'PDS_UsrOfferTypeUsrCommission' ) { 		// or percent changed
                                var price = await request.$context.PDS_UsrPriceUSD_3s7mfia;
                                var percent = await request.$context.PDS_UsrOfferTypeUsrCommission;
                                var commission = price * percent / 100;
                                request.$context.PDS_UsrCommissionUSD_rjgvogf = commission;
                    }
                       // Call the next handler if it exists and return its result.
                       return next?.handle(request);
                 }
            }
          
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
//s.art
        "usr.DGValidator": {
                      validator: function (config) {
                            return function (control) {
                            // перевіряємо значення
                                    let value = control.value;
                                    let minValue = config.minValue;
                                    //перевіряємо що value більш або дорівнює minValue
                                    let valueIsCorrect = value >= minValue;
                                    var result;
                                    if (valueIsCorrect) {
                                          result = null;
                                    } else {
                                    //якщо умова не виконується то виводим повідомлення "config.message"
                                          result = {
                                                  "usr.DGValidator": { 
                                                        message: config.message	
                                                    }
                                          };
                                    }
                                    return result;
                                };
                          },
                          //перелік атрибутів які перевіряємо
                          params: [
                                  {
                                          name: "minValue"
                                  },	
                                  {
                                          name: "message"
                                  }
                            ],
                            async: false
                    }
//e.art        
          
        }/**SCHEMA_VALIDATORS*/
	};
});