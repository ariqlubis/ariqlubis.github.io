import React from "react";

export default function ItemLister({ data }) {
    return (
        <div>
            <h4 className="mb-3 text-center">Penjual</h4>
            <ul className="list-group">
                {data.items.map((item) => (
                    <li key={item.id} className="list-group-item">
                        <strong>Name:</strong> {item.nama} <br />
                        <strong>Phone:</strong> {item["no.telepon"]} <br />
                        <strong>Address:</strong> {item.alamat}
                    </li>
                ))}
            </ul>
        </div>
    );
}
