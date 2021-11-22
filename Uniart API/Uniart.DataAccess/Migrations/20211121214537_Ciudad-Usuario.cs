using Microsoft.EntityFrameworkCore.Migrations;

namespace Uniart.DataAccess.Migrations
{
    public partial class CiudadUsuario : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Usuarios_Ciudades_Ciudad_Id",
                table: "Usuarios");

            migrationBuilder.RenameColumn(
                name: "Ciudad_Id",
                table: "Usuarios",
                newName: "Ciudad_id");

            migrationBuilder.RenameIndex(
                name: "IX_Usuarios_Ciudad_Id",
                table: "Usuarios",
                newName: "IX_Usuarios_Ciudad_id");

            migrationBuilder.AlterColumn<int>(
                name: "Ciudad_id",
                table: "Usuarios",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Ciudades_Ciudad_id",
                table: "Usuarios",
                column: "Ciudad_id",
                principalTable: "Ciudades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Usuarios_Ciudades_Ciudad_id",
                table: "Usuarios");

            migrationBuilder.RenameColumn(
                name: "Ciudad_id",
                table: "Usuarios",
                newName: "Ciudad_Id");

            migrationBuilder.RenameIndex(
                name: "IX_Usuarios_Ciudad_id",
                table: "Usuarios",
                newName: "IX_Usuarios_Ciudad_Id");

            migrationBuilder.AlterColumn<int>(
                name: "Ciudad_Id",
                table: "Usuarios",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Ciudades_Ciudad_Id",
                table: "Usuarios",
                column: "Ciudad_Id",
                principalTable: "Ciudades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
