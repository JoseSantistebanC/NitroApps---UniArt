using Microsoft.EntityFrameworkCore.Migrations;

namespace Uniart.DataAccess.Migrations
{
    public partial class ActualaizacionComision : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Comisiones_ComisionId",
                table: "Servicios");

            migrationBuilder.DropIndex(
                name: "IX_Servicios_ComisionId",
                table: "Servicios");

            migrationBuilder.DropColumn(
                name: "ComisionId",
                table: "Servicios");

            migrationBuilder.AddColumn<int>(
                name: "Servicio_id",
                table: "Comisiones",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Comisiones_Servicio_id",
                table: "Comisiones",
                column: "Servicio_id");

            migrationBuilder.AddForeignKey(
                name: "FK_Comisiones_Servicios_Servicio_id",
                table: "Comisiones",
                column: "Servicio_id",
                principalTable: "Servicios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comisiones_Servicios_Servicio_id",
                table: "Comisiones");

            migrationBuilder.DropIndex(
                name: "IX_Comisiones_Servicio_id",
                table: "Comisiones");

            migrationBuilder.DropColumn(
                name: "Servicio_id",
                table: "Comisiones");

            migrationBuilder.AddColumn<int>(
                name: "ComisionId",
                table: "Servicios",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Servicios_ComisionId",
                table: "Servicios",
                column: "ComisionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Comisiones_ComisionId",
                table: "Servicios",
                column: "ComisionId",
                principalTable: "Comisiones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
