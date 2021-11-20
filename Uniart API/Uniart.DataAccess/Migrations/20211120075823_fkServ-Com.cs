using Microsoft.EntityFrameworkCore.Migrations;

namespace Uniart.DataAccess.Migrations
{
    public partial class fkServCom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Comision_id",
                table: "Servicios",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "comisionId",
                table: "Servicios",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Servicios_comisionId",
                table: "Servicios",
                column: "comisionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Comisiones_comisionId",
                table: "Servicios",
                column: "comisionId",
                principalTable: "Comisiones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Comisiones_comisionId",
                table: "Servicios");

            migrationBuilder.DropIndex(
                name: "IX_Servicios_comisionId",
                table: "Servicios");

            migrationBuilder.DropColumn(
                name: "Comision_id",
                table: "Servicios");

            migrationBuilder.DropColumn(
                name: "comisionId",
                table: "Servicios");
        }
    }
}
