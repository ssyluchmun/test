var request = require('request');
var requestPromise = require('request-promise');
var querystring = require('querystring');
var Promise = require('bluebird'); 

var Odoo = require('node-odoo');

var Customer = '[{"naming_series":"CUST-","doctype":"Customer","disabled":0,"accounts":[],"owner":"Administrator","bypass_credit_limit_check_at_sales_order":0,"customer_name":"PID-00001","modified_by":"Administrator","customer_type":"Individual","docstatus":0,"territory":"All Territories","default_commission_rate":0,"is_internal_customer":0,"language":"en","credit_limit":0,"name":"PID-00001","customer_group":"All Customer Groups","companies":[],"is_frozen":0,"sales_team":[]}]';
var getCustomerObject = function(){ return JSON.parse(Customer);}

var Sales_Invoice = '[{"base_write_off_amount":0,"modified_by":"razrbhr.8888@gmail.com","title":"PID-00001","packed_items":[],"selling_price_list":"Standard Selling","set_posting_time":0,"discount_amount":0,"base_in_words":"MUR Fifty only.","due_date":"2018-06-12","ignore_pricing_rule":0,"advances":[],"base_discount_amount":0,"base_total_taxes_and_charges":0,"commission_rate":0,"name":"SINV-00003","is_return":0,"write_off_outstanding_amount_automatically":0,"taxes":[],"base_rounding_adjustment":0,"is_pos":0,"against_income_account":"Sales - shl","write_off_amount":0,"creation":"2018-06-12 19:57:38.492994","party_account_currency":"MUR","net_total":50,"items":[{"item_group":"Services","stock_qty":1,"base_price_list_rate":50,"image":"","creation":"2018-06-12 19:57:38.492994","base_amount":50,"qty":1,"margin_rate_or_amount":0,"rate":50,"total_weight":0,"owner":"razrbhr.8888@gmail.com","cost_center":"Main - shl","stock_uom":"Unit","base_net_amount":50,"modified_by":"razrbhr.8888@gmail.com","base_net_rate":50,"discount_percentage":0,"item_name":"Blood Pressure Check","enable_deferred_revenue":0,"amount":50,"actual_qty":0,"net_rate":50,"conversion_factor":1,"base_rate_with_margin":0,"docstatus":1,"actual_batch_qty":0,"uom":"Unit","description":"Blood Pressure Check","parent":"SINV-00003","base_rate":50,"item_code":"Blood Pressure Check","margin_type":"","page_break":0,"doctype":"Sales Invoice Item","rate_with_margin":0,"delivered_qty":1,"delivered_by_supplier":0,"price_list_rate":50,"allow_zero_valuation_rate":0,"name":"11b6f5d03c","idx":1,"item_tax_rate":"{}","income_account":"Sales - shl","modified":"2018-06-12 16:00:04","weight_per_unit":0,"expense_account":"Cost of Goods Sold - shl","parenttype":"Sales Invoice","net_amount":50,"is_fixed_asset":0,"parentfield":"items"}],"owner":"razrbhr.8888@gmail.com","total_qty":1,"doctype":"Sales Invoice","price_list_currency":"MUR","timesheets":[],"pos_total_qty":0,"payments":[],"terms":"","is_opening":"No","total_commission":0,"c_form_applicable":"No","base_net_total":50,"idx":0,"rounded_total":50,"shipping_address_name":"","apply_discount_on":"Grand Total","in_words":"MUR Fifty only.","additional_discount_percentage":0,"base_paid_amount":0,"conversion_rate":1,"to_date":"2018-06-14","total_advance":0,"posting_time":"19:57:50.458438","total":50,"customer_name":"PID-00001","update_stock":0,"base_total":50,"from_date":"2018-06-04","territory":"All Territories","company":"shl","base_rounded_total":50,"customer":"PID-00001","grand_total":50,"language":"en","modified":"2018-06-12 19:58:10.980309","rounding_adjustment":0,"posting_date":"2018-06-12","customer_group":"All Customer Groups","naming_series":"SINV-","currency":"MUR","company_address_display":"","paid_amount":0,"debit_to":"Debtors - shl","base_change_amount":0,"base_grand_total":50,"docstatus":1,"status":"Paid","total_billing_amount":0,"outstanding_amount":0,"change_amount":0,"total_net_weight":0,"remarks":"No Remarks","payment_schedule":[{"due_date":"2018-06-12","modified_by":"razrbhr.8888@gmail.com","name":"c89a0516ba","parent":"SINV-00003","creation":"2018-06-12 19:57:38.799844","modified":"2018-06-12 19:57:50.176976","doctype":"Payment Schedule","idx":1,"parenttype":"Sales Invoice","payment_amount":50,"invoice_portion":100,"owner":"razrbhr.8888@gmail.com","docstatus":1,"parentfield":"payment_schedule"}],"plc_conversion_rate":1,"total_taxes_and_charges":0,"sales_team":[]},{"base_write_off_amount":0,"modified_by":"razrbhr.8888@gmail.com","title":"PID-00001","packed_items":[],"selling_price_list":"Standard Selling","set_posting_time":0,"discount_amount":0,"base_in_words":"MUR Fifty only.","due_date":"2018-06-12","ignore_pricing_rule":0,"advances":[],"base_discount_amount":0,"base_total_taxes_and_charges":0,"commission_rate":0,"name":"SINV-00001","is_return":0,"write_off_outstanding_amount_automatically":0,"taxes":[],"base_rounding_adjustment":0,"is_pos":0,"against_income_account":"Sales - shl","write_off_amount":0,"creation":"2018-06-12 19:43:44.193310","party_account_currency":"MUR","net_total":50,"items":[{"item_group":"Services","stock_qty":1,"base_price_list_rate":50,"image":"","creation":"2018-06-12 19:43:44.193310","base_amount":50,"qty":1,"margin_rate_or_amount":0,"rate":50,"total_weight":0,"owner":"razrbhr.8888@gmail.com","cost_center":"Main - shl","stock_uom":"Unit","base_net_amount":50,"modified_by":"razrbhr.8888@gmail.com","base_net_rate":50,"discount_percentage":0,"item_name":"Blood Pressure Check","enable_deferred_revenue":0,"amount":50,"actual_qty":0,"net_rate":50,"conversion_factor":1,"base_rate_with_margin":0,"docstatus":1,"actual_batch_qty":0,"uom":"Unit","description":"Blood Pressure Check","parent":"SINV-00001","base_rate":50,"item_code":"Blood Pressure Check","margin_type":"","page_break":0,"doctype":"Sales Invoice Item","rate_with_margin":0,"delivered_qty":0,"delivered_by_supplier":0,"price_list_rate":50,"allow_zero_valuation_rate":0,"name":"8419769c92","idx":1,"item_tax_rate":"{}","income_account":"Sales - shl","modified":"2018-06-12 19:43:57.420384","weight_per_unit":0,"expense_account":"Cost of Goods Sold - shl","parenttype":"Sales Invoice","net_amount":50,"is_fixed_asset":0,"parentfield":"items"}],"owner":"razrbhr.8888@gmail.com","total_qty":1,"po_date":"2018-06-06","doctype":"Sales Invoice","price_list_currency":"MUR","timesheets":[],"pos_total_qty":0,"payments":[],"terms":"","is_opening":"No","total_commission":0,"c_form_applicable":"No","base_net_total":50,"idx":1,"rounded_total":50,"shipping_address_name":"","apply_discount_on":"Grand Total","in_words":"MUR Fifty only.","additional_discount_percentage":0,"base_paid_amount":0,"conversion_rate":1,"to_date":"2018-06-06","total_advance":0,"posting_time":"19:43:57.723587","total":50,"customer_name":"PID-00001","update_stock":0,"base_total":50,"from_date":"2018-06-04","territory":"All Territories","company":"shl","base_rounded_total":50,"customer":"PID-00001","grand_total":50,"language":"en","modified":"2018-06-12 19:45:08.904541","rounding_adjustment":0,"posting_date":"2018-06-12","customer_group":"All Customer Groups","naming_series":"SINV-","currency":"MUR","company_address_display":"","paid_amount":0,"debit_to":"Debtors - shl","base_change_amount":0,"base_grand_total":50,"docstatus":1,"status":"Credit Note Issued","total_billing_amount":0,"taxes_and_charges":"","outstanding_amount":-50,"change_amount":0,"total_net_weight":0,"remarks":"No Remarks","payment_schedule":[{"due_date":"2018-06-12","modified_by":"razrbhr.8888@gmail.com","name":"0d25ac1959","parent":"SINV-00001","creation":"2018-06-12 19:43:44.501810","modified":"2018-06-12 19:43:57.420384","doctype":"Payment Schedule","idx":1,"parenttype":"Sales Invoice","payment_amount":50,"invoice_portion":100,"owner":"razrbhr.8888@gmail.com","docstatus":1,"parentfield":"payment_schedule"}],"plc_conversion_rate":1,"total_taxes_and_charges":0,"sales_team":[]},{"base_write_off_amount":0,"modified_by":"razrbhr.8888@gmail.com","title":"PID-00001","packed_items":[],"selling_price_list":"Standard Selling","return_against":"SINV-00001","set_posting_time":0,"discount_amount":0,"base_in_words":"MUR Fifty only.","due_date":"2018-06-12","ignore_pricing_rule":1,"advances":[],"base_discount_amount":0,"base_total_taxes_and_charges":0,"commission_rate":0,"name":"SINV-00002","is_return":1,"write_off_outstanding_amount_automatically":0,"taxes":[],"select_print_heading":"Credit Note","base_rounding_adjustment":0,"is_pos":0,"against_income_account":"Sales - shl","write_off_amount":0,"creation":"2018-06-12 19:45:04.960456","party_account_currency":"MUR","net_total":-50,"items":[{"item_group":"Services","stock_qty":-1,"base_price_list_rate":50,"image":"","creation":"2018-06-12 19:45:04.960456","base_amount":-50,"qty":-1,"margin_rate_or_amount":0,"rate":50,"total_weight":0,"owner":"razrbhr.8888@gmail.com","cost_center":"Main - shl","stock_uom":"Unit","base_net_amount":-50,"modified_by":"razrbhr.8888@gmail.com","base_net_rate":50,"discount_percentage":0,"item_name":"Blood Pressure Check","enable_deferred_revenue":0,"amount":-50,"actual_qty":0,"net_rate":50,"conversion_factor":1,"base_rate_with_margin":0,"docstatus":1,"actual_batch_qty":0,"uom":"Unit","description":"Blood Pressure Check","parent":"SINV-00002","base_rate":50,"item_code":"Blood Pressure Check","margin_type":"","page_break":0,"doctype":"Sales Invoice Item","rate_with_margin":0,"delivered_qty":0,"delivered_by_supplier":0,"price_list_rate":50,"allow_zero_valuation_rate":0,"name":"16b644ba00","idx":1,"item_tax_rate":"{}","income_account":"Sales - shl","modified":"2018-06-12 19:45:08.434885","weight_per_unit":0,"expense_account":"Cost of Goods Sold - shl","parenttype":"Sales Invoice","net_amount":-50,"is_fixed_asset":0,"parentfield":"items"}],"owner":"razrbhr.8888@gmail.com","total_qty":-1,"po_date":"2018-06-06","doctype":"Sales Invoice","price_list_currency":"MUR","timesheets":[],"pos_total_qty":0,"payments":[],"terms":"","is_opening":"No","total_commission":0,"c_form_applicable":"No","base_net_total":-50,"idx":0,"rounded_total":-50,"shipping_address_name":"","apply_discount_on":"Grand Total","in_words":"MUR Fifty only.","additional_discount_percentage":0,"base_paid_amount":0,"conversion_rate":1,"total_advance":0,"posting_time":"19:45:08.796801","total":-50,"customer_name":"PID-00001","update_stock":0,"base_total":-50,"territory":"All Territories","company":"shl","base_rounded_total":-50,"customer":"PID-00001","grand_total":-50,"language":"en","modified":"2018-06-12 19:45:08.434885","rounding_adjustment":0,"posting_date":"2018-06-12","customer_group":"All Customer Groups","naming_series":"SINV-","currency":"MUR","company_address_display":"","paid_amount":0,"debit_to":"Debtors - shl","base_change_amount":0,"base_grand_total":-50,"docstatus":1,"status":"Return","total_billing_amount":0,"outstanding_amount":0,"change_amount":0,"total_net_weight":0,"remarks":"No Remarks","payment_schedule":[{"due_date":"2018-06-12","modified_by":"razrbhr.8888@gmail.com","name":"52e23083d2","parent":"SINV-00002","creation":"2018-06-12 19:45:04.960456","modified":"2018-06-12 19:45:08.434885","doctype":"Payment Schedule","idx":1,"parenttype":"Sales Invoice","payment_amount":-50,"invoice_portion":100,"owner":"razrbhr.8888@gmail.com","docstatus":1,"parentfield":"payment_schedule"}],"plc_conversion_rate":1,"total_taxes_and_charges":0,"company_address":"","sales_team":[]}]';
var getSalesInvoiceObject = function(){return JSON.parse(Sales_Invoice);}

var Purchase_Invoice = '[{"base_write_off_amount":0,"modified_by":"Administrator","title":"BYCHEM LTD","supplied_items":[],"set_posting_time":0,"taxes_and_charges_added":0,"base_in_words":"MUR Two Hundred only.","due_date":"2018-06-14","doctype":"Purchase Invoice","ignore_pricing_rule":0,"advances":[],"base_discount_amount":0,"base_total_taxes_and_charges":0,"supplier_name":"BYCHEM LTD","items":[{"stock_qty":1,"base_price_list_rate":0,"image":"","creation":"2018-06-14 09:14:25.102172","landed_cost_voucher_amount":0,"base_amount":200,"qty":1,"item_tax_rate":"{}","rate":200,"total_weight":0,"owner":"Administrator","cost_center":"Main - shl","received_qty":0,"stock_uom":"Milligram/Cubic Meter","rm_supp_cost":0,"base_net_amount":200,"page_break":0,"modified_by":"Administrator","base_net_rate":200,"discount_percentage":0,"item_name":"PCM 1000 mg","amount":200,"net_rate":200,"conversion_factor":1,"docstatus":0,"uom":"Milligram/Cubic Meter","doctype":"Purchase Invoice Item","description":"PCM 1000 mg","parent":"PINV-00001","item_tax_amount":0,"base_rate":200,"item_code":"X201","rejected_qty":0,"include_exploded_items":0,"price_list_rate":0,"allow_zero_valuation_rate":0,"name":"f2b681c4b7","idx":1,"item_group":"Consumable","modified":"2018-06-14 09:14:25.102172","weight_per_unit":0,"expense_account":"Stock Received But Not Billed - shl","parenttype":"Purchase Invoice","valuation_rate":200,"net_amount":200,"is_fixed_asset":0,"parentfield":"items"}],"discount_amount":0,"name":"PINV-00001","is_paid":0,"is_return":0,"taxes":[],"base_rounding_adjustment":0,"write_off_amount":0,"creation":"2018-06-14 09:14:25.102172","party_account_currency":"MUR","net_total":200,"owner":"Administrator","total_qty":1,"price_list_currency":"MUR","base_taxes_and_charges_added":0,"supplier":"BYCHEM LTD","buying_price_list":"Standard Buying","terms":"","is_opening":"No","base_net_total":200,"taxes_and_charges_deducted":0,"rounded_total":200,"apply_discount_on":"Grand Total","in_words":"MUR Two Hundred only.","additional_discount_percentage":0,"disable_rounded_total":0,"base_paid_amount":0,"conversion_rate":1,"total_advance":0,"posting_time":"9:14:25.136412","total":200,"is_subcontracted":"No","update_stock":0,"base_total":200,"company":"shl","language":"en","base_rounded_total":200,"grand_total":200,"idx":0,"modified":"2018-06-14 09:14:25.188551","rounding_adjustment":0,"posting_date":"2018-06-14","against_expense_account":"Stock Received But Not Billed - shl","naming_series":"PINV-","currency":"MUR","base_taxes_and_charges_deducted":0,"on_hold":0,"paid_amount":0,"credit_to":"Creditors - shl","base_grand_total":200,"docstatus":0,"status":"Draft","group_same_items":0,"outstanding_amount":200,"total_net_weight":0,"remarks":"No Remarks","payment_schedule":[{"due_date":"2018-06-14","name":"fa2152b829","parent":"PINV-00001","creation":"2018-06-14 09:14:25.208658","modified":"2018-06-14 09:14:25.208658","doctype":"Payment Schedule","idx":1,"parenttype":"Purchase Invoice","payment_amount":200,"invoice_portion":100,"docstatus":0,"parentfield":"payment_schedule"}],"plc_conversion_rate":1,"total_taxes_and_charges":0}]';
var getPurchaseInvoiceObject = function(){return JSON.parse(Purchase_Invoice);}

var Payment_Entry = '[{"total_allocated_amount":200,"naming_series":"PE-","mode_of_payment":"Cash","target_exchange_rate":1,"paid_to":"Creditors - shl","base_paid_amount":200,"paid_to_account_currency":"MUR","references":[{"reference_doctype":"Purchase Invoice","total_amount":200,"modified_by":"Administrator","name":"63225da57d","parent":"PE-00003","due_date":"2018-06-14","reference_name":"PINV-00001","creation":"2018-06-14 09:19:07.669003","modified":"2018-06-14 09:19:13.920099","outstanding_amount":200,"idx":1,"parenttype":"Payment Entry","doctype":"Payment Entry Reference","owner":"Administrator","docstatus":1,"allocated_amount":200,"exchange_rate":1,"parentfield":"references"}],"owner":"Administrator","unallocated_amount":0,"allocate_payment_amount":1,"modified_by":"Administrator","paid_amount":200,"title":"BYCHEM LTD","party_type":"Supplier","base_total_allocated_amount":200,"remarks":"Amount MUR 200 to BYCHEM LTD\nAmount MUR 200 against Purchase Invoice PINV-00001","party":"BYCHEM LTD","base_received_amount":200,"source_exchange_rate":1,"creation":"2018-06-14 09:19:07.669003","doctype":"Payment Entry","paid_from_account_balance":100,"company":"shl","paid_from":"Cash - shl","party_balance":-200,"deductions":[],"party_name":"BYCHEM LTD","docstatus":1,"paid_from_account_currency":"MUR","paid_to_account_balance":0,"name":"PE-00003","idx":0,"difference_amount":0,"modified":"2018-06-14 09:19:13.920099","received_amount":200,"payment_type":"Pay","posting_date":"2018-06-14"},{"total_allocated_amount":50,"naming_series":"PE-","mode_of_payment":"Cash","target_exchange_rate":1,"paid_to":"Cash - shl","base_paid_amount":50,"paid_to_account_currency":"MUR","references":[{"reference_doctype":"Sales Invoice","total_amount":50,"modified_by":"razrbhr.8888@gmail.com","name":"d4ccb41c3f","parent":"PE-00002","due_date":"2018-06-12","reference_name":"SINV-00003","creation":"2018-06-12 19:58:07.692381","modified":"2018-06-12 19:58:10.787489","outstanding_amount":50,"idx":1,"parenttype":"Payment Entry","doctype":"Payment Entry Reference","owner":"razrbhr.8888@gmail.com","docstatus":1,"allocated_amount":50,"exchange_rate":1,"parentfield":"references"}],"owner":"razrbhr.8888@gmail.com","unallocated_amount":0,"allocate_payment_amount":1,"modified_by":"razrbhr.8888@gmail.com","paid_amount":50,"title":"PID-00001","party_type":"Customer","base_total_allocated_amount":50,"remarks":"Amount MUR 50 received from PID-00001\nAmount MUR 50 against Sales Invoice SINV-00003","party":"PID-00001","base_received_amount":50,"source_exchange_rate":1,"creation":"2018-06-12 19:58:07.692381","doctype":"Payment Entry","paid_from_account_balance":0,"company":"shl","paid_from":"Debtors - shl","party_balance":0,"deductions":[],"party_name":"PID-00001","docstatus":1,"paid_from_account_currency":"MUR","paid_to_account_balance":50,"name":"PE-00002","idx":0,"difference_amount":0,"modified":"2018-06-12 19:58:10.787489","received_amount":50,"payment_type":"Receive","posting_date":"2018-06-12"},{"total_allocated_amount":50,"naming_series":"PE-","mode_of_payment":"Cash","target_exchange_rate":1,"paid_to":"Cash - shl","base_paid_amount":50,"paid_to_account_currency":"MUR","references":[{"reference_doctype":"Sales Invoice","total_amount":50,"modified_by":"razrbhr.8888@gmail.com","name":"159af3612d","parent":"PE-00001","due_date":"2018-06-12","reference_name":"SINV-00001","creation":"2018-06-12 19:44:28.618417","modified":"2018-06-12 19:44:32.045792","outstanding_amount":50,"idx":1,"parenttype":"Payment Entry","doctype":"Payment Entry Reference","owner":"razrbhr.8888@gmail.com","docstatus":1,"allocated_amount":50,"exchange_rate":1,"parentfield":"references"}],"owner":"razrbhr.8888@gmail.com","unallocated_amount":0,"allocate_payment_amount":1,"modified_by":"razrbhr.8888@gmail.com","paid_amount":50,"title":"PID-00001","party_type":"Customer","base_total_allocated_amount":50,"remarks":"Amount MUR 50 received from PID-00001\nAmount MUR 50 against Sales Invoice SINV-00001","party":"PID-00001","base_received_amount":50,"source_exchange_rate":1,"creation":"2018-06-12 19:44:28.618417","doctype":"Payment Entry","paid_from_account_balance":0,"company":"shl","paid_from":"Debtors - shl","party_balance":50,"deductions":[],"party_name":"PID-00001","docstatus":1,"paid_from_account_currency":"MUR","paid_to_account_balance":0,"name":"PE-00001","idx":0,"difference_amount":0,"modified":"2018-06-12 19:44:32.045792","received_amount":50,"payment_type":"Receive","posting_date":"2018-06-12"}]';

var getPaymentEntryObject = function(){return JSON.parse(Payment_Entry);}

var Supplier = '[{"prevent_pos":0,"naming_series":"SUPP-","creation":"2018-06-14 09:10:50.483442","doctype":"Supplier","disabled":0,"accounts":[],"warn_pos":0,"owner":"Administrator","hold_type":"","on_hold":0,"is_internal_supplier":0,"supplier_group":"Pharmaceutical","modified_by":"Administrator","warn_rfqs":0,"idx":0,"docstatus":0,"prevent_rfqs":0,"supplier_name":"BYCHEM LTD","represents_company":"shl","name":"BYCHEM LTD","language":"en","country":"Mauritius","companies":[],"modified":"2018-06-14 09:10:50.483442","tax_withholding_config":[],"is_frozen":0}]';

var getSupplierObject = function(){return JSON.parse(Supplier);}

var Item = '[{"website_specifications":[],"disabled":0,"reorder_levels":[],"modified_by":"razrbhr.8888@gmail.com","item_name":"Blood Pressure Check","has_expiry_date":0,"default_material_request_type":"Purchase","website_item_groups":[],"max_discount":0,"name":"Blood Pressure Check","item_group":"Services","weight_per_unit":0,"creation":"2018-06-12 17:14:32.900027","doctype":"Item","taxes":[],"create_new_batch":0,"has_variants":0,"supplier_items":[],"enable_deferred_revenue":0,"inspection_required_before_delivery":0,"is_sales_item":1,"is_sub_contracted_item":0,"shelf_life_in_days":0,"tolerance":0,"customer_code":"","is_stock_item":0,"idx":1,"variant_based_on":"Item Attribute","min_order_qty":0,"valuation_rate":0,"attributes":[],"owner":"Administrator","customer_items":[],"barcodes":[],"item_defaults":[{"modified_by":"razrbhr.8888@gmail.com","name":"076f4fb3ce","parent":"Blood Pressure Check","income_account":"Sales - shl","company":"shl","creation":"2018-06-12 17:14:32.933073","modified":"2018-06-12 19:57:50.358161","idx":1,"parenttype":"Item","doctype":"Item Default","owner":"Administrator","docstatus":0,"parentfield":"item_defaults"}],"is_item_from_hub":0,"valuation_method":"","item_code":"Blood Pressure Check","retain_sample":0,"show_in_website":0,"is_purchase_item":0,"safety_stock":0,"modified":"2018-06-12 19:57:50.358161","delivered_by_supplier":0,"uoms":[{"modified_by":"razrbhr.8888@gmail.com","name":"4d5cf43df4","parent":"Blood Pressure Check","creation":"2018-06-12 17:14:32.930100","modified":"2018-06-12 19:57:50.358161","doctype":"UOM Conversion Detail","idx":1,"parenttype":"Item","conversion_factor":1,"owner":"Administrator","docstatus":0,"uom":"Unit","parentfield":"uoms"}],"last_purchase_rate":0,"naming_series":"ITEM-","publish_in_hub":1,"allow_alternative_item":0,"no_of_months":0,"end_of_life":"2099-12-31","synced_with_hub":0,"stock_uom":"Unit","show_variant_in_website":0,"docstatus":0,"sample_quantity":0,"description":"Blood Pressure Check","weightage":0,"total_projected_qty":0,"lead_time_days":0,"opening_stock":0,"has_batch_no":0,"has_serial_no":0,"standard_rate":0,"is_fixed_asset":0,"inspection_required_before_purchase":0},{"website_specifications":[],"disabled":0,"reorder_levels":[],"modified_by":"Administrator","item_name":"PCM 1000 mg","has_expiry_date":0,"default_material_request_type":"Purchase","website_item_groups":[],"max_discount":0,"name":"X201","item_group":"Consumable","weight_per_unit":0,"creation":"2018-06-14 09:14:07.857500","doctype":"Item","taxes":[],"create_new_batch":0,"has_variants":0,"supplier_items":[],"enable_deferred_revenue":0,"inspection_required_before_delivery":0,"is_sales_item":1,"is_sub_contracted_item":0,"shelf_life_in_days":0,"tolerance":0,"customer_code":"","is_stock_item":1,"idx":0,"variant_based_on":"Item Attribute","min_order_qty":0,"valuation_rate":0,"attributes":[],"owner":"Administrator","customer_items":[],"barcodes":[],"country_of_origin":"Mauritius","item_defaults":[{"name":"61e60b6b58","parent":"X201","company":"shl","creation":"2018-06-14 09:14:07.909000","modified":"2018-06-14 09:14:07.909000","idx":1,"parenttype":"Item","doctype":"Item Default","docstatus":0,"parentfield":"item_defaults"}],"is_item_from_hub":0,"valuation_method":"","item_code":"X201","retain_sample":0,"show_in_website":0,"is_purchase_item":1,"safety_stock":0,"modified":"2018-06-14 09:14:07.857500","delivered_by_supplier":0,"uoms":[{"name":"a0a9cc94b2","parent":"X201","creation":"2018-06-14 09:14:07.905600","modified":"2018-06-14 09:14:07.905600","doctype":"UOM Conversion Detail","idx":1,"parenttype":"Item","conversion_factor":1,"docstatus":0,"uom":"Milligram/Cubic Meter","parentfield":"uoms"}],"last_purchase_rate":200,"naming_series":"ITEM-","publish_in_hub":1,"allow_alternative_item":0,"no_of_months":0,"end_of_life":"2099-12-31","synced_with_hub":0,"stock_uom":"Milligram/Cubic Meter","show_variant_in_website":0,"docstatus":0,"sample_quantity":0,"description":"PCM 1000 mg","weightage":0,"total_projected_qty":0,"lead_time_days":0,"opening_stock":0,"has_batch_no":0,"has_serial_no":0,"standard_rate":0,"is_fixed_asset":0,"inspection_required_before_purchase":0}]';

var getItemObject = function(){return JSON.parse(Item);}
var js2xmlparser = require("js2xmlparser");
  
  
var erpnext_auth = ({
    username : 'razrbhr.8888@gmail.com',
    password : 'admin',
    baseUrl  : 'http://35.237.251.150:80',
    cookieJar : request.jar()
});
 
 

    /**
     * LOGIN AUTH
     */
    var loginResponse = function(){
        var formData = querystring.stringify({ usr: erpnext_auth.username, pwd: erpnext_auth.password });
        var contentLength = formData.length;
        return requestPromise.post({
            url: erpnext_auth.baseUrl + "/api/method/login",
            jar: erpnext_auth.cookieJar,
            body: formData,
            headers: {
                'Content-Length': contentLength,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
     /**
     * END LOGIN AUTH
     */

    /**
     * getIdentifiersName()
     */
    var getIdentifiersName = function (requestparam) { 
        return loginResponse().then(function (res) {
            return requestPromise.get({
                url: erpnext_auth.baseUrl + "/api/resource/"+requestparam,
                jar: erpnext_auth.cookieJar,
            }).then(function (customers) {
                customers = JSON.parse(customers);
                return customers.data;
            });
        });
    }

    /**
     * getIdentifierByName()
     */
    var getIdentifierByName = function (object) {
  
        return loginResponse().then(function (res) {
            return requestPromise.get({ 
                url: erpnext_auth.baseUrl + "/api/resource/" + object.requestparam+ "/" + object.name,
                jar: erpnext_auth.cookieJar,
            }).then(function (customer) {
                customer = JSON.parse(customer);
                return customer.data;
            })
        });
    }

    /**
     * getIdentifiers()
     */
    var getIdentifiers = function (requestparam) { 
        return  getIdentifiersName(requestparam).then(function (identifiers) {
            return Promise.map(identifiers, function (identifier) {
                var object = {requestparam:requestparam,name:identifier.name};
                return getIdentifierByName(object);
            });
        })
    }
    /**
     * END getIdentifiers()
     */

    var createIndentifier = function (object) {
        var formData = querystring.stringify({ data: JSON.stringify(object) });
        var contentLength = formData.length;
        return loginResponse().then(function (res) {
            return requestPromise.post({
                url: erpnext_auth.baseUrl + "/api/resource/"+object.requestparam,
                jar: erpnext_auth.cookieJar,
                body: formData,
                headers: {
                    'Content-Length': contentLength,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (response) {
                response = JSON.parse(response);
                return response.data;
            })
        })
    }


module.exports = function (app) {

 
    app.post('/api/getcustomers', function (req, res) {
        getIdentifiers('Customer').then(function(customers){
        res.json(customers); });
    });  

    app.post('/api/insertcustomer', function (req, res) {
        var customer_object = getCustomerObject()[0];
        customer_object.requestparam = 'Customer';
        customer_object.customer_name = 'Steve Blank';
        customer_object.name = customer_object.customer_name;
        createIndentifier(customer_object).then(function(customers){
        res.json(customers); }); 
 
    }); 
    var jsonxml = require('jsontoxml');
    app.post('/api/wcftest', function (req, res) { 

        
        var soap = require('strong-soap').soap; 

        var url = 'http://192.168.100.32/Service1.svc?wsdl';
 
        var args = {'StudentId':4,'FirstName':'Mark','LastName':'Dallas','RegisterNo':'IPC290423C','Department':'IPD'};
 

        soap.createClient(url, function(err, client) {

            client.AddStudents(args,function(err, result) {
                console.log(err);
            }); 

        });
 
    }); 
  
};
