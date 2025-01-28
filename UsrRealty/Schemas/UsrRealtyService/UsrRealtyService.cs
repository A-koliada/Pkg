namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using System;
    using System.Web.SessionState;
    using Terrasoft.Core;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class RealtyService : BaseService //, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public decimal GetMaxPrice(Guid realtyTypeId, Guid realtyOfferTypeId)
        {
            if (realtyTypeId==Guid.Empty || realtyOfferTypeId == Guid.Empty)
            {
                return -1;
            }
            /*
            UserConnection my_uc;
            if (this.UserConnection != null)
            {
                my_uc = this.с; // in a normal web service call (authenticated request)
            }
            else
            {
                my_uc = this.AppConnection.SystemUserConnection; // in case of an anonymous request
            }
            */
            Select select = new Select(UserConnection)
                .Column(Func.Max("UsrPriceUSD"))
                .From("UsrRealty")
                .Where("UsrTypeRealtyId").IsEqual(Column.Parameter(realtyTypeId))
                .And("UsrOfferTypeId").IsEqual(Column.Parameter(realtyOfferTypeId))
                as Select;
            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }
        
        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "OK!";
        }
        
    }
}