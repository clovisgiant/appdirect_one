using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MongoDBMVC.Models
{
    public class Employee
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }
        public string nome { get; set; }
        public string endereco { get; set; }
        public string endereco2 { get; set; }
        public string data { get; set; }
        public string telefone { get; set; }
        public string telefone2 { get; set; }
        public string redessociais { get; set; }
        public string cpf { get; set; }
        public string rg { get; set; }
    }
}
